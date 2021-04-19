import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import showToast from 'src/app/utils/toast';
import { UserWood } from 'src/_models/user-wood';
import { UserWoodService } from 'src/_services/user-wood.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: Array<UserWood> = [];

  constructor(private userWood: UserWoodService, private router: Router) { }

  ngOnInit() {
    this.userWood.getUserList().subscribe(
      (res) => {
        this.userList = res;
      },
      (err) => {

      }
    );
  }

  getState(status: string) {
    return status === '1' ? 'Activo':'Inactivo';
  }

  deleteUser(id: number) {
    this.userWood.deleteUser(id).subscribe(
      (res) => {
        this.userList = this.userList.filter(x => x.id !== id);
        showToast('success', 'Se eliminó con exito');
        this.router.navigate(['/user-management']);
      },
      (err) => {
        showToast('error', 'Error de servidor');
      }
    );
  }

}
