 
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';  
@Injectable({
   providedIn: 'root'
})
export class AuthService {
   conversionDecryptOutput: any;
   constructor(private http: HttpClient) { }
   isUserLoggedIn: boolean = false;
   user:any;

   async login(userName: string, password: string): Promise<Observable<boolean>>{
      
     var x= await this.getuser(userName,password);
     
    
   //   this.isUserLoggedIn = userName == 'admin' && password == 'admin';
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 

   return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );
   }

   logout(): void {
   this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
   }
    async getuser(userName:string,password:string){
   debugger;
    let result= await this.http.get<any>("http://localhost:47314/api/users/getuser/"+userName+" ")
   .toPromise().then(data => { 
     debugger;
     this.conversionDecryptOutput = CryptoJS.AES.decrypt(data.password.trim(), password.trim()).toString(CryptoJS.enc.Utf8);  
 
   //    this.user= data;
   //   console.log(data);  
     if(data.name==userName && this.conversionDecryptOutput==password){
     this.isUserLoggedIn = true;    
   }
   }).catch(err=>{
      debugger;
      if(err.error.text=="UserNotFound")  this.isUserLoggedIn = false;
   
   }
      );
      debugger;
 return this.isUserLoggedIn;
 }
}