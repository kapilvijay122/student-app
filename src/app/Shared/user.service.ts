import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from './ConfirmPasswordValidator';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder,private httpClient:HttpClient) { }

   readonly apiUrl = "https://localhost:44318/api";
   formModel = this.fb.group({
    UserName:['',Validators.required],
    Email:['',[Validators.email,Validators.required]],
    FullName:[''],
    Password:['',[Validators.required,Validators.minLength(6)]],
    ConfirmPassword:['',Validators.required]
    },{
      validators:ConfirmedValidator('Password','ConfirmPassword')

    })
   register(){
    var std = {
      UserName:this.formModel.value.UserName,
      Email:this.formModel.value.Email,
      FullName:this.formModel.value.FullName,
      Password:this.formModel.value.Password
    }
    return this.httpClient.post(this.apiUrl +"/ApplicationUser/Register",std)
   }

  login(formData: any){
    return this.httpClient.post(this.apiUrl +"/ApplicationUser/Login",formData)
    
  }

  getStudentInfo(){
    var header = new HttpHeaders({'Authorization' : 'Bearer ' + localStorage.getItem('token')});
    return this.httpClient.get(this.apiUrl +"/StudentBasic",{headers:header})
  }

}
