import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NewHomeComponent } from './component/new-home/new-home.component';
import { ViewDoctorComponent } from './component/view-doctor/view-doctor.component';
import { AddDoctorComponent } from './component/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './component/update-doctor/update-doctor.component';
import { ViewSpecializationComponent } from './component/view-specialization/view-specialization.component';
import { ViewTodaySurgeryComponent } from './component/view-today-surgery/view-today-surgery.component';
import { UpdateSurgeryComponent } from './component/update-surgery/update-surgery.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewHomeComponent,
    ViewDoctorComponent,
    AddDoctorComponent,
    UpdateDoctorComponent,
    ViewSpecializationComponent,
    ViewTodaySurgeryComponent,
    UpdateSurgeryComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
