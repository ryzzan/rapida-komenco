import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileFormService {
  BASE_URL = 'localhost:3000';
  constructor(private _httpClient: HttpClient) {}

  delete(id: number) {
    return this._httpClient.delete(`${this.BASE_URL}/people/${id}`).toPromise();
  }

  save(body: any) {
    return this._httpClient.post(`${this.BASE_URL}/people`, body).toPromise();
  }

  update(body: any, id: number) {
    return this._httpClient.put(`${this.BASE_URL}/people/${id}`, body).toPromise();
  }

  find(id: string) {
    return this._httpClient.get(`${this.BASE_URL}/people/${id}`).toPromise();
  }
}
