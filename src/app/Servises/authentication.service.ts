import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/student"

 public getStudent(formData:any)
  {
    return this.http.get(this.url)
  }
}
