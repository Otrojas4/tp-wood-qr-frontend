import { Component, OnInit } from '@angular/core';
import { UserWood } from 'src/_models/user-wood';
import { UserWoodService } from 'src/_services/user-wood.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: Array<UserWood> = [];

  constructor(private userWood: UserWoodService) { }

  ngOnInit() {
    this.userWood.getUserList().subscribe(
      (res) => {
        this.userList = res;
      },
      (err) => {

      }
    );
  }

}
