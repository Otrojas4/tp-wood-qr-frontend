import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrimaryTransService {

  constructor(private http: HttpClient) { }

  getPrimaryTransList() {
    return this.http.get(`${environment.backendUrlMain}/primary-trans`);
  }

}
