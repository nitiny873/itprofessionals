import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProductService } from './product.service';
import{HttpClientModule} from '@angular/common/http';
import { LogoffComponent } from './logoff/logoff.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OpeningsComponent } from './openings/openings.component';
import { RegisterComponent } from './register/register.component';
import { AddopeningComponent } from './addopening/addopening.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { OpeningdetailsComponent } from './openingdetails/openingdetails.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LogoffComponent,
    NavbarComponent,
    OpeningsComponent,
    RegisterComponent,
    AddopeningComponent,
    UserdetailsComponent,
    OpeningdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ButtonModule,
  InputTextModule,
  FormsModule,
  TableModule,
  HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
