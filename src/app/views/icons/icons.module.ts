import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Home, LogIn, LogOut, Box, Sunrise, Sunset, UserPlus, PlusCircle } from 'angular-feather/icons';

const icons = {
  Home,
  LogIn,
  LogOut,
  Box,
  Sunrise,
  Sunset,
  UserPlus,
  PlusCircle
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
