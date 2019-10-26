import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./Component/dashboard/dashboard.component";
import { EmployeeTableComponent } from './Component/employee-table/employee-table.component';
import { EmployeeComponent } from './Component/employee/employee.component';
import { ViewBasicInfoComponent } from './Component/view-basic-info/view-basic-info.component';
import { ViewAcademicInfoComponent } from './Component/view-academic-info/view-academic-info.component';
import { ViewProfessionalInfoComponent } from './Component/view-professional-info/view-professional-info.component';
import { SecuredComponent } from './Component/secured/secured.component';
import { EmployeeRegistrationComponent } from './Component/employee-registration/employee-registration.component';
import { BasicInfoComponent } from './Component/employee-registration/basic-info/basic-info.component';
import { AcadamicInfoComponent } from './Component/employee-registration/acadamic-info/acadamic-info.component';
import { ProfessionalQualificationInfoComponent } from './Component/employee-registration/professional-qualification-info/professional-qualification-info.component';
import { ViewExperienceInfoComponent } from './Component/view-experience-info/view-experience-info.component';
import { ExperienceInfoComponent } from './Component/employee-registration/experience-info/experience-info.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { RoleGuardService as RoleGuard, } from './services/route-guard.service';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: "secured", component: SecuredComponent, canActivate: [AuthGuard], children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: "dashboard", component: DashboardComponent },
      { path: "all_employee", component: EmployeeTableComponent },
      {path : "my-profile", redirectTo: "new-employee", pathMatch: "full"},
      {
        path: "employee-details", component: EmployeeComponent,
        children: [
          { path: '', redirectTo: 'profile', pathMatch: 'full' },
          { path: 'profile', component: ViewBasicInfoComponent },
          { path: 'academic-info', component: ViewAcademicInfoComponent },
          { path: 'professional-info', component: ViewProfessionalInfoComponent },
          { path: 'experience', component: ViewExperienceInfoComponent },
        ]
      },
      {
        path: 'new-employee', component: EmployeeRegistrationComponent, children: [
          { path: '', redirectTo: 'profile', pathMatch: 'full' },
          { path: 'profile', component: BasicInfoComponent, canActivate: [RoleGuard], data: {expectedRole: ['hr'], redirectTo: 'secured/new-employee/academic-info'}},
          { path: 'academic-info', component: AcadamicInfoComponent },
          { path: 'professional-info', component: ProfessionalQualificationInfoComponent },
          { path: 'experience', component: ExperienceInfoComponent },
        ]
      },
      { path: 'profile', component: BasicInfoComponent },
      { path: 'academic-info', component: AcadamicInfoComponent },
      { path: 'professional-info', component: ProfessionalQualificationInfoComponent },
      { path: 'experience', component: ExperienceInfoComponent },
      { path: '**', redirectTo: 'secure' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
