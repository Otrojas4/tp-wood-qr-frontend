import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MadProductToCreate } from 'src/_models/mad-product-to-create';

@Injectable({
  providedIn: 'root'
})
export class ProductMadService {

  constructor(private http: HttpClient) { }

  getListProductsMad(): Observable<any> {
    return this.http.get(`${environment.backendUrlMain}/mad-product`);
  }

  createProductMad(madProductToCreate: MadProductToCreate) {
    return this.http.post(`${environment.backendUrlMain}/mad-product`, madProductToCreate);
  }

}
