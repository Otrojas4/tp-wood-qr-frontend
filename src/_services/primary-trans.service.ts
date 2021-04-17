import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PrimaryTransformation } from 'src/_models/primary-transformation';

@Injectable({
  providedIn: 'root'
})
export class PrimaryTransService {

  constructor(private http: HttpClient) { }

  getPrimaryTransList() {
    return this.http.get(`${environment.backendUrlMain}/primary-trans`);
  }

  createPrimaryTrans(primaryTransformation: PrimaryTransformation) {
    return this.http.post(`${environment.backendUrlMain}/primary-trans`, primaryTransformation);
  }

}
