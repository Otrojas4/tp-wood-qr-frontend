import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { IconsModule } from '../../icons/icons.module';
import { CreateProductComponent } from './create-product/create-product.component';

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
    RouterModule.forChild(routes),
    IconsModule,
  ],
  declarations: [
    ProductComponent,
    CreateProductComponent
  ]
})
export class ProductModule { }
