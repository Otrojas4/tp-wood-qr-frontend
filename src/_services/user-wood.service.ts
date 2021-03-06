import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ChangeStatus } from 'src/_models/change-status';
import { UserWood } from 'src/_models/user-wood';

@Injectable({
  providedIn: 'root'
})
export class UserWoodService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get(`${environment.backendUrlMain}/user`);
  }

  createUser(userWood: UserWood) {
    return this.http.post(`${environment.backendUrlMain}/user/create`, userWood);
  }

  editUser(changeStatus: ChangeStatus) {
    return this.http.put(`${environment.backendUrlMain}/user/edit`, changeStatus);
  }

  deleteUser(id: number) {
    return this.http.delete(`${environment.backendUrlMain}/user/${id}`);
  }

}
