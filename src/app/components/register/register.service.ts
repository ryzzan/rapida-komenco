import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  BASE_URL = 'http://localhost:3000';
  constructor(private _httpClient: HttpClient) {}

  save(body: any) {
    return this._httpClient.post(`${this.BASE_URL}/auth/register`, body, {
      headers: {
        'Accept': '*',
        'Content-Type': 'application/json; charset=utf-8',
      }
    }).toPromise();
  }

  authorize(body: any) {
    return this._httpClient.post(`${this.BASE_URL}/auth/authorize`, body, {
      headers: {
        'Accept': '*',
        'Content-Type': 'application/json; charset=utf-8',
      }
    }).toPromise();
  }
}