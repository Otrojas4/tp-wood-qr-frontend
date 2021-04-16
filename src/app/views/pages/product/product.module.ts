import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { IconsModule } from '../../icons/icons.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { esLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
defineLocale('es', esLocale);

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'create',
    component: CreateProductComponent
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
    ProductComponent,
    CreateProductComponent
  ],
  providers: [
    BsLocaleService
  ]
})
export class ProductModule { }
