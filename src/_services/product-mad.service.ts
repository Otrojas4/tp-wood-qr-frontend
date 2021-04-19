import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MadProduct } from 'src/_models/mad-product';
import { MadProductToCreate } from 'src/_models/mad-product-to-create';

@Injectable({
  providedIn: 'root'
})
export class ProductMadService {

  constructor(private http: HttpClient) { }

  getListProductsMad(): Observable<any> {
    return this.http.get(`${environment.backendUrlMain}/mad-product`);
  }

  createProductMad(madProductToCreate: MadProductToCreate): Observable<any> {
    return this.http.post(`${environment.backendUrlMain}/mad-product`, madProductToCreate);
  }

  getOneProductMad(id: number): Observable<any> {
    return this.http.get(`${environment.backendUrlMain}/mad-product/${id}`);
  }

  deleteProductMad(id: number): Observable<any> {
    return this.http.delete(`${environment.backendUrlMain}/mad-product/${id}`);
  }

  updateProductMad(madProduct: MadProduct): Observable<any> {
    return this.http.put(`${environment.backendUrlMain}/mad-product`, madProduct);
  }

}
