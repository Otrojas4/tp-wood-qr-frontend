import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Home, LogIn, LogOut, Box, Sunrise, Sunset,
  UserPlus, PlusCircle, Edit, Delete, Eye, Plus,
  Trash
} from 'angular-feather/icons';

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
  Delete,
  Eye,
  Plus,
  Trash
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
