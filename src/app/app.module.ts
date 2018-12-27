import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { EmployeeComponent } from './employee/employee.component';
import { AlphabeticalPipe } from './pipes/alphabetical.pipe';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { EmployeeService } from './services/employee.service';
import { DailyComponent } from './daily/daily.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AddComponent } from './add/add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // EmployeeComponent,
    AlphabeticalPipe,
    EditComponent,
    CreateComponent,
    DailyComponent,
    WeeklyComponent,
    ReversePipe,
    AddComponent,
    NotFoundComponent,
    EmployeeDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,


  ],
  providers: [EmployeeService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
