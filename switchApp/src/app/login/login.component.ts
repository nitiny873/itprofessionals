import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=''
  password=''
  errMessage=''
  constructor(private router:Router, private authservice:AuthService) { }

  ngOnInit(): void {
    // alert("ok")
    //  
  }
  async login(){

 await (await this.authservice.login(this.username, this.password)).toPromise().then(
  data=>{
  

if(data)
{
 this.router.navigate(['/dashboard'])
}else{

this.errMessage='User Not Found!'
}
  }
)

}
}
