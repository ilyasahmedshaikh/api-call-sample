import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/core/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  endpoint: string = `${this.config.baseUrl}/api/users`;

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getAllUsers() {
    let headers = new HttpHeaders({
      'Authorization': '',
    })

    return this.http.get(this.endpoint, { headers });
  }

  addNewUser(data: any) {
    let headers = new HttpHeaders({
      'Authorization': '',
    })

    return this.http.post(this.endpoint, data, { headers });
  }
}
