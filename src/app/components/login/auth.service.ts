
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Login, LoginResponse } from '../../interfaces/login.interface';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASEURL = environment.baseUrl;
  user = new BehaviorSubject<User | null>(null);

  constructor(
    public http: HttpClient,
    private router: Router
  ) {
    this.recoveryDataFromLocalStorage();
  }

  private recoveryDataFromLocalStorage(): void {
    const data: string | null = localStorage.getItem('user_data');
    if (!data) {
      return;
    }
    this.user.next(JSON.parse(data));
  }

  private async setUserAndTokenLocalStorage(token: string): Promise<void> {
    localStorage.setItem('token', token);
    await this.http
      .post<User>(`${this.BASEURL}/auth/get-user/${token}`, {projectId: environment.projectId})
      .toPromise()
      .then((user) => {
        this.user.next(user);
        localStorage.setItem('user_data', JSON.stringify(user));
        void this.router.navigate(['/main']);
      });
  }

  async login(login: Login): Promise<void | LoginResponse> {
    return this.http
      .post(`${this.BASEURL}/auth/login`, login)
      .toPromise()
      .then((res) => {
        const { token } = res as LoginResponse;
        const userAndTokenLocalStorage = 
        this.setUserAndTokenLocalStorage(token);
      });
  }

  async requestPassword(login: { email: string }): Promise<any> {
    return this.http
      .post(`${this.BASEURL}/auth/request-password`, login)
      .toPromise();
  }

  logout(): void {
    this.user.next(null);
    localStorage.clear();
    void this.router.navigate(['/']);
  }
}