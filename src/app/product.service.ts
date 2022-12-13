import { Injectable } from '@angular/core';
import { Product } from './product/product';
// import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[];

  constructor() {
    let old_products = window.localStorage.getItem('products');
    if( !old_products ){
      this.products = [
        {
          id:1,
          name:'Iphone 7',
          price:20000
        },
        {
          id:2,
          name:'Iphone 8',
          price:20000
        },
        {
          id:3,
          name:'Iphone 9',
          price:20000
        }
      ];
      let stringProducts = JSON.stringify(this.products);
      window.localStorage.setItem('products',stringProducts);
    }else{
      this.products = JSON.parse(old_products);
    }

   }
  all(){
    return this.products;
  }
  find( id:any){
    return this.products[id];
  }
  store(data:Product){
    this.products.push(data);
    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }
  update( id:any, data:any){
    this.products[id] = data;
    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }
  destroy( id:any){
    this.products.splice(id,1);
    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }
}
