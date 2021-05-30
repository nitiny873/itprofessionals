import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { user } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[];
  employees:employee[];
  users:user[];
  newemployee:string;
  postId: any;
  status: string;
  constructor(private productService: ProductService,private http: HttpClient) { }
 
  ngOnInit() {
    
    // this.productService.getProductsSmall().then(data =>
      
    //   this.products = data

    //   );
    
    this.http.get<any>("http://localhost:47314/api/users/")
    .subscribe(data => {
       debugger;
      this.users = data;
      console.log(data);      
    });
    // this.productService.getEmployeesSmall().then(data =>{
    //  debugger 
    //   this.products = data
    // }
    //   );
  }
addemployee(event){
  debugger
  this.http.post<any>('http://localhost:44952/api/employees', { name: this.newemployee }).subscribe(data => {
    debugger;
    this.postId = data.id;
})
window.location.reload();
}

deleteemployee(event){
  debugger
  this.http.delete('http://localhost:44952/api/employees/'+event+'')
  .subscribe(() => this.status = 'Delete successful');

  window.location.reload();
}
}
