import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import showToast from 'src/app/utils/toast';
import { UserWood } from 'src/_models/user-wood';
import { UserWoodService } from 'src/_services/user-wood.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  createUserForm: FormGroup;

  constructor(private userWoodService: UserWoodService, private router: Router) { }

  ngOnInit() {
    this.setUpUserForm();
  }

  setUpUserForm(): void {
    this.createUserForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      type: new FormControl('ROLE_ADMIN', [Validators.required]),
      status: new FormControl('1', [Validators.required]),
    });
  }

  createUser() {

    const userToCreate: UserWood = Object.assign({}, this.createUserForm.value);

    this.userWoodService.createUser(userToCreate).subscribe(
      (res) => {
        showToast('success', 'Se creó con exito');
        this.router.navigate(['/user-management']);
      },
      (err) => {
        showToast('error', 'Error al crear, cambie de usuario por favor');
      }
    );
  }

}
