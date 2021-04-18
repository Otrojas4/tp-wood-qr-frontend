import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { IconsModule } from '../../icons/icons.module';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule
  ],
  declarations: [
    UserListComponent
  ]
})
export class UserModule { }
