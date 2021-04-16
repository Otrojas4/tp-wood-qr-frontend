import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecondaryTransService {

  constructor(private http: HttpClient) { }

  getSecondaryTransList() {
    return this.http.get(`${environment.backendUrlMain}/secondary-trans`);
  }


}
