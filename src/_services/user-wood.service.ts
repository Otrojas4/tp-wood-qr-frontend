import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserWoodService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get(`${environment.backendUrlMain}/user`);
  }

}
