import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import * as CryptoJS from 'crypto-js';  
  
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:string;technology:string;email:string;experience:string;company:string;password:string;
 user:user={};
  conversionEncryptOutput: any;
  conversionDecryptOutput: any;
  constructor(private http:HttpClient) { }
 
  ngOnInit(): void {
  }
  registerUser(){
this.user.name=this.name;
this.user.technology=this.technology;
this.user.email=this.email;
this.user.experience=this.experience;
this.user.company=this.company;
this.encryptPass();
this.user.password=this.conversionEncryptOutput;
//console.log(this.user);
this.encryptPass();

this.http.post<any>('http://localhost:47314/api/users/', this.user).subscribe(data => {
      var x=data;
 
     // this.postId = data.id;
  },   (e)=>{
    console.log("Error Occured...!");
  },()=>{
    console.log("Registered")
  })
  }

  encryptPass(){
   // debugger;
      this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.password.trim(), this.password.trim()).toString();  
    //  console.log(this.conversionEncryptOutput);
 
    //   this.conversionDecryptOutput = CryptoJS.AES.decrypt(this.conversionEncryptOutput.trim(), this.password.trim()).toString(CryptoJS.enc.Utf8);  
    //   console.log(this.conversionDecryptOutput);
  }
}
