import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../components/login/auth.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.auth.user.value) {
      void this.router.navigate(['/']);
      console.warn('You must authenticate to login');
      return false;
    }
    return true;
  }
}