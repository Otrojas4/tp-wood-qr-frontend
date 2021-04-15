import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../../icons/icons.module';

@NgModule({
  imports: [
    CommonModule,
    IconsModule,
    RouterModule
  ],
  declarations: [BaseComponent]
})
export class LayoutModule { }
