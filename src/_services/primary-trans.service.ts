import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { PrimaryTransformation } from 'src/_models/primary-transformation';

@Injectable({
  providedIn: 'root'
})
export class PrimaryTransService {

  constructor(private http: HttpClient) { }

  getPrimaryTransList(): Observable<any> {
    return this.http.get(`${environment.backendUrlMain}/primary-trans`);
  }

  createPrimaryTrans(primaryTransformation: PrimaryTransformation): Observable<any> {
    return this.http.post(`${environment.backendUrlMain}/primary-trans`, primaryTransformation);
  }

  deletePrimaryTrans(id: number) {
    return this.http.delete(`${environment.backendUrlMain}/primary-trans/${id}`);
  }

}
