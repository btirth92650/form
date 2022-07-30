import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Servises/authentication.service';

@Component({
  selector: 'app-r-forms',
  templateUrl: './r-forms.component.html',
  styleUrls: ['./r-forms.component.css']
})
export class RFormsComponent implements OnInit {



  isShow= false

  constructor(private auth:AuthenticationService) { }

  formData={
    Fname:"",
    Lname:"",
    Email:"",
    Password:"",
    Age:"",
    Address:"",
    Phone:""
  }

  ngOnInit(): void {
  }

  addDetails(){
    console.log(this.formData)
    this.auth.getStudent(this.formData).subscribe((data:any)=>{
      this.formData.Address='',
      this.formData.Age='',
      this.formData.Email='',
      this.formData.Fname='',
      this.formData.Lname='',
      this.formData.Password='',  
      this.formData.Phone=''
    })
    
  }

  onClick(){
    this.isShow=!this.isShow
  }
}
