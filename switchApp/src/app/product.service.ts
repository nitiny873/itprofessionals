import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }

  getProductsSmall() {
   
      return this.http.get<any>("assets/products.json")
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }
  getEmployeesSmall() {
   
    return this.http.get<any>("localhost:44952/api/employees")
    .subscribe(data => {
      debugger;
      console.log(data);      
    });
}
}