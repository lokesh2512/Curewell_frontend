import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDoctorComponent } from './component/view-doctor/view-doctor.component';
import { NewHomeComponent } from './component/new-home/new-home.component';
import { ViewSpecializationComponent } from './component/view-specialization/view-specialization.component';
import { ViewTodaySurgeryComponent } from './component/view-today-surgery/view-today-surgery.component';
import { AddDoctorComponent } from './component/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './component/update-doctor/update-doctor.component';
import { UpdateSurgeryComponent } from './component/update-surgery/update-surgery.component';

const routes: Routes = [
  { path: "", component: NewHomeComponent },
  { path: "doctor", component: ViewDoctorComponent },
  { path: "specialization", component: ViewSpecializationComponent },
  {path:"today" ,component:ViewTodaySurgeryComponent},
  { path: "add", component: AddDoctorComponent },
  { path: "edit", component: UpdateDoctorComponent },
  { path:"editsurgery", component: UpdateSurgeryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
