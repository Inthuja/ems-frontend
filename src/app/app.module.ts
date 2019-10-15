import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./Component/dashboard/dashboard.component";
import { NavbarComponent } from "./Component/navbar/navbar.component";
import { EmployeeComponent } from './Component/employee/employee.component';
import { ViewBasicInfoComponent } from './Component/view-basic-info/view-basic-info.component';
import { ViewAcademicInfoComponent } from './Component/view-academic-info/view-academic-info.component';
import { ViewProfessionalInfoComponent } from './Component/view-professional-info/view-professional-info.component';
import { ExperienceInfoComponent } from './Component/experience-info/experience-info.component';
import { EmployeeTableComponent } from './Component/employee-table/employee-table.component';
import { UserRegistrationComponent } from './Component/user-registration/user-registration.component';
import { ChangePasswordComponent } from './Component/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    EmployeeComponent,
    ViewBasicInfoComponent,
    ViewAcademicInfoComponent,
    ViewProfessionalInfoComponent,
    ExperienceInfoComponent,
    EmployeeTableComponent,
    UserRegistrationComponent,
    ChangePasswordComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
