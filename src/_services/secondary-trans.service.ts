import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { SecondaryTransformation } from 'src/_models/secondary-transformation';

@Injectable({
  providedIn: 'root'
})
export class SecondaryTransService {

  constructor(private http: HttpClient) { }

  getSecondaryTransList(): Observable<any> {
    return this.http.get(`${environment.backendUrlMain}/secondary-trans`);
  }

  createSecondaryTrans(primaryTransformationToCreate: SecondaryTransformation): Observable<any> {
    return this.http.post(`${environment.backendUrlMain}/secondary-trans`, primaryTransformationToCreate);
  }

  deleteSecondaryTrans(id: number) {
    return this.http.delete(`${environment.backendUrlMain}/secondary-trans/${id}`);
  }

}
