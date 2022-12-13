import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products.component';
import { ProductComponent } from './components/product.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductEditComponent } from './components/product-edit.component';
import { ProductDeleteComponent } from './components/product-delete.component';

import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
