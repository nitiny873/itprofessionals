import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { opening } from '../opening';

@Component({
  selector: 'app-addopening',
  templateUrl: './addopening.component.html',
  styleUrls: ['./addopening.component.css']
})
export class AddopeningComponent implements OnInit {

  constructor(private http:HttpClient) { }
opening:opening={};
noc:string;exp:string;description:string;noticeperiod:string;ctc:string;
  ngOnInit(): void {
  }
  AddOpening(){
    debugger;
    this.opening.NameOfCompany=this.noc;
    this.opening.Description=this.description;
    this.opening.Experience=this.exp;
    this.opening.CTC=this.ctc;
    this.opening.NoticePeriod=this.noticeperiod;
    console.log(this.opening);

    this.http.post<any>('http://localhost:47314/api/openings/', this.opening).subscribe(data => {
      var x=data;
      console.log(data)
     // this.postId = data.id;
  })
  }
}
