import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { opening } from '../opening';

@Component({
  selector: 'app-openingdetails',
  templateUrl: './openingdetails.component.html',
  styleUrls: ['./openingdetails.component.css']
})
export class OpeningdetailsComponent implements OnInit {
  opening:any={};
  id:any;
  constructor(private route: ActivatedRoute, private http:HttpClient) {
    debugger;
    this.route.params.subscribe(params => {
      console.log(params)
    this.id=params.openingid;
    }); // Object {}
   // alert(this.id)
  }

  ngOnInit(): void {
    this.http.get<any>("http://localhost:47314/api/openings/"+this.id+"")
    .subscribe(data => {
       debugger;
      this.opening = data;
      console.log( this.opening);      
    });
  }

}
