import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user:any={};
  id:any;
  constructor(private route: ActivatedRoute, private http:HttpClient) {
    debugger;
    this.route.params.subscribe(params => {
      console.log(params)
    this.id=params.userid;
    }); // Object {}
   // alert(this.id)
  }

  ngOnInit(): void {
    this.http.get<any>("http://localhost:47314/api/users/"+this.id+"")
    .subscribe(data => {
       debugger;
      this.user = data;
      console.log( this.user);      
    });
  }

}
