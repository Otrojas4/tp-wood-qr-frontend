import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Home, LogIn, LogOut, Box, Sunrise, Sunset, UserPlus } from 'angular-feather/icons';

const icons = {
  Home,
  LogIn,
  LogOut,
  Box,
  Sunrise,
  Sunset,
  UserPlus
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
