import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddopeningComponent } from './addopening/addopening.component';
import { DashboardGuard } from './dashboard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoffComponent } from './logoff/logoff.component';
import { OpeningdetailsComponent } from './openingdetails/openingdetails.component';
import { OpeningsComponent } from './openings/openings.component';
import { RegisterComponent } from './register/register.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {
    path:'dashboard',component:DashboardComponent ,canActivate:[DashboardGuard]
  },{
    path:'dashboard/:userid',component:UserdetailsComponent,
  },
  {
    path:'login',component:LoginComponent,
  },
  {
    path:'logoff',component:LogoffComponent,
  },
  {
    path:'opening',component:OpeningsComponent,canActivate:[DashboardGuard]
  },{
    path:'opening/:openingid',component:OpeningdetailsComponent,
  },
  {
    path:'addopening',component:AddopeningComponent,canActivate:[DashboardGuard]
  },
  {
    path:'register',component:RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
