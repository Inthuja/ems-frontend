import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./Component/dashboard/dashboard.component";
import { NavbarComponent } from "./Component/navbar/navbar.component";
import { EmployeeComponent } from './Component/employee/employee.component';
import { ViewBasicInfoComponent } from './Component/view-basic-info/view-basic-info.component';
import { ViewAcademicInfoComponent } from './Component/view-academic-info/view-academic-info.component';
import { ViewProfessionalInfoComponent } from './Component/view-professional-info/view-professional-info.component';
import { EmployeeTableComponent } from './Component/employee-table/employee-table.component';
import { ChangePasswordComponent } from './Component/change-password/change-password.component';
import { TopNavComponent } from './shared-components/top-nav/top-nav.component';
import { SideBarComponent } from './shared-components/side-bar/side-bar.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { SecuredComponent } from './Component/secured/secured.component';
import { EmployeeRegistrationComponent } from './Component/employee-registration/employee-registration.component';
import { BasicInfoComponent } from './Component/employee-registration/basic-info/basic-info.component';
import { AcadamicInfoComponent } from './Component/employee-registration/acadamic-info/acadamic-info.component';
import { ProfessionalQualificationInfoComponent } from './Component/employee-registration/professional-qualification-info/professional-qualification-info.component';
import { ViewExperienceInfoComponent } from './Component/view-experience-info/view-experience-info.component';
import { ExperienceInfoComponent } from './Component/employee-registration/experience-info/experience-info.component';



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
    ChangePasswordComponent,
    TopNavComponent,
    SideBarComponent,
    FooterComponent,
    SecuredComponent,
    EmployeeRegistrationComponent,
    BasicInfoComponent,
    AcadamicInfoComponent,
    ProfessionalQualificationInfoComponent,
    ViewExperienceInfoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
