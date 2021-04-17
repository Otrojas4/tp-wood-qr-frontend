import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../../icons/icons.module';
import { ListPrimaryTransformationComponent } from './list-primary-transformation/list-primary-transformation.component';
import { CreatePrimaryTransformationComponent } from './create-primary-transformation/create-primary-transformation.component';
import { esLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
defineLocale('es', esLocale);

const routes: Routes = [
  {
    path: '',
    component: ListPrimaryTransformationComponent
  },
  {
    path: 'create',
    component: CreatePrimaryTransformationComponent
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
    ListPrimaryTransformationComponent,
    CreatePrimaryTransformationComponent
  ],
  providers: [
    BsLocaleService
  ]
})
export class PrimaryTransformationModule { }
