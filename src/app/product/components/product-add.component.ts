import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './../templates/product-add.component.html',
})
export class ProductAddComponent {
  product!:Product;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductService,
    private _Router: Router
  ) {}
  handleSubmit(value:any):void {
    let productData:Product = {
      name: value.name,
      price: value.price,
      description: value.description,
    }
    this._ProductService.save( productData).subscribe(() => {
      //chuyen huong ve list
      this._Router.navigate(['/products']);
    }, (e: any) => {
      console.log(e);
    });
    // this._ProductService.save(productData);
    this._Router.navigate(['/']);
  }
}
