import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

    private baseUrl = "http://localhost:8080/";

  public getAllEmployees() {
    return this.http.get(`${this.baseUrl}`);
  }

  
}
