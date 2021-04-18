import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Home, LogIn, LogOut, Box, Sunrise, Sunset, UserPlus, PlusCircle, Edit, Delete } from 'angular-feather/icons';

const icons = {
  Home,
  LogIn,
  LogOut,
  Box,
  Sunrise,
  Sunset,
  UserPlus,
  PlusCircle,
  Edit,
  Delete
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
