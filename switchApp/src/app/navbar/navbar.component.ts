import { Component, OnDestroy, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
athome:boolean;
  classstyle: string;
  openingclassstyle: string;
  homeclassstyle: string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onHomeClick(){
  this.homeclassstyle="nav-link active exa";
  this.openingclassstyle="nav-link active";
  this.router.navigate(['/dashboard'])
}
onOpeningClick(){
  this.openingclassstyle="nav-link active exa";
  this.homeclassstyle="nav-link active";
  this.router.navigate(['/opening'])
}
signOut(){
  localStorage.removeItem('isUserLoggedIn'); 
  this.router.navigate(["\login"]);
}
}
