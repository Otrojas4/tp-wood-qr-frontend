import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { esLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { RouterModule, Routes } from '@angular/router';
import { IconsModule } from '../../icons/icons.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListSecondaryTransformationComponent } from './list-secondary-transformation/list-secondary-transformation.component';
import { CreateSecondaryTransformationComponent } from './create-secondary-transformation/create-secondary-transformation.component';
defineLocale('es', esLocale);

const routes: Routes = [
  {
    path: '',
    component: ListSecondaryTransformationComponent
  },
  {
    path: 'create',
    component: CreateSecondaryTransformationComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    IconsModule,
  ],
  declarations: [
    ListSecondaryTransformationComponent,
    CreateSecondaryTransformationComponent
  ],
  providers: [
    BsLocaleService
  ]
})
export class SecondaryTransformationModule { }
