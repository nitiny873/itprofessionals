import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { opening } from '../opening';
@Component({
  selector: 'app-openings',
  templateUrl: './openings.component.html',
  styleUrls: ['./openings.component.css']
})
export class OpeningsComponent implements OnInit {
openings:opening[];
classstyle:any;
  constructor(private http:HttpClient) { }
ngOnDestroy(){

}
  ngOnInit(): void {
   let httpOptions=new HttpHeaders({'Access-Control-Allow-Origin':'*'})
    this.http.get<any>("http://localhost:47314/api/openings/",{headers:httpOptions})
    .subscribe(data => {
       debugger;
      this.openings = data;
      console.log(data);      
    });
  }

}
