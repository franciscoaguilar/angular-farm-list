import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DailyComponent } from './daily/daily.component';



const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'employee', component: EmployeeComponent },
{ path: 'create', component: CreateComponent },
{ path: 'edit/:id', component: EditComponent },
{ path: 'daily', component: DailyComponent },
// { path: '', redirectTo: 'daily', pathMatch: 'full' }
];



@NgModule({
  imports: [ RouterModule.forRoot(routes), HttpClientModule ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
