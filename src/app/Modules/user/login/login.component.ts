import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  formModel = {
    UserName:'',
    Password:''
  }
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') !=null ){
      this.router.navigateByUrl('/home')
    }else {
    }
  }
onSubmit(ng:NgForm){
   this.userService.login(ng.value).subscribe((stdRes:any)=>{
    console.log("Token Response Value"+stdRes)
    localStorage.setItem('token',stdRes.token);
    this.router.navigateByUrl('/home');
    console.log("Token Value Is" +stdRes.token);
   },
   err=>{
    if(err.status == 400){
      alert("login Username or Password incorrect");
    }
    else
    {
      console.log(err);
    }

   }
   )
}
}
