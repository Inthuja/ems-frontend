import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Employee from '../business-entities/employe';
import Login from '../business-entities/login';
import AcadamicQualification from '../business-entities/acadamic-qualification';
import ProfessionalQualification from '../business-entities/professional-qualification';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

    private baseUrl = "http://localhost:8080/EMS";

  public getAllEmployees() {
    return this.http.get(`${this.baseUrl}/user`);
  }

  public authenticate(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/login/authenticate`,  {username , password});
  }

  public getAllEmployeeNames() {
    return this.http.get(`${this.baseUrl}/user/allUsers`);
  }

  public getEmployeeById(id: number) {
    return this.http.get(`${this.baseUrl}/user/${id}`);
  }

  public getAccadamicQualificationByEmployee(id: number) {
    return this.http.get(`${this.baseUrl}/acedemicQualification/user/${id}`);
  }
  public getAccadamicQualificationById(id: number) {
    return this.http.get(`${this.baseUrl}/acedemicQualification/${id}`);
  }
  public getProfessionalQualificationByEmployee(id: number) {
    return this.http.get(`${this.baseUrl}/professionalQualification/user/${id}`);
  }
  public getProfessionalQualificationByid(id: number) {
    return this.http.get(`${this.baseUrl}/professionalQualification/${id}`);
  }
  public getExperienceByEmployee(id: number) {
    return this.http.get(`${this.baseUrl}/experience/user/${id}`);
  }
  public getExperienceByid(id: number) {
    return this.http.get(`${this.baseUrl}/experience/${id}`);
  }

  public createEmployee(user: Employee) {
    return this.http.post(`${this.baseUrl}/user`, user);
  }

  public createLogin(login: Login) {
    return this.http.post(`${this.baseUrl}/login`, login);
  }

  public createAcadamic(acadamic: AcadamicQualification) {
    return this.http.post(`${this.baseUrl}/acedemicQualification`, acadamic);
  }

  public createProfessional(professional: ProfessionalQualification) {
    return this.http.post(`${this.baseUrl}/professionalQualification`, professional);
  }
  public createExperience(experience: ProfessionalQualification) {
    return this.http.post(`${this.baseUrl}/experience`, experience);
  }
  
  
  public updateEmployee(user: Employee, id: number) {
    return this.http.put(`${this.baseUrl}/user/${id}`, user);
  }

  public updateAcadamic(acadamic: AcadamicQualification,id: number) {
    return this.http.put(`${this.baseUrl}/acedemicQualification/${id}`, acadamic);
  }

  public updateProfessional(professional: ProfessionalQualification,id: number) {
    return this.http.put(`${this.baseUrl}/professionalQualification/${id}`, professional);
  }
  public updateExperience(experience: ProfessionalQualification,id: number) {
    return this.http.put(`${this.baseUrl}/experience/${id}`, experience);
  }


  public deleteEmployee( id: number) {
    return this.http.delete(`${this.baseUrl}/user/${id}`);
  }

  public deleteAcadamic(id: number) {
    return this.http.delete(`${this.baseUrl}/acedemicQualification/${id}`);
  }

  public deleteProfessional(id: number) {
    return this.http.delete(`${this.baseUrl}/professionalQualification/${id}`);
  }
  public deleteExperience(id: number) {
    return this.http.delete(`${this.baseUrl}/experience/${id}`);
  }
}
