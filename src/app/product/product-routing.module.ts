import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add.component';
import { ProductDeleteComponent } from './components/product-delete.component';
import { ProductEditComponent } from './components/product-edit.component';
import { ProductsComponent } from './components/products.component';
import { ProductComponent } from './components/product.component';


const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'add', component: ProductAddComponent},
    { path: ':id/edit', component: ProductEditComponent },
    { path: ':id/delete', component: ProductDeleteComponent },
    { path: ':id/show', component: ProductComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
