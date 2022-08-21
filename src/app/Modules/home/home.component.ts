import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  userdetails: any;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    debugger
  
    this.userService.getStudentInfo().subscribe((stdRes:any)=>{
      this.userdetails = stdRes;
      console.log("User Details:" +this.userdetails)
    },
    
    err=>{
      if(err.status == 401 && err.ok == false){
        localStorage.removeItem('token');
        this.router.navigateByUrl('user/login');
        alert("Token Expired");
      }
      console.log(err);
    }
    )
  }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('user/login');
  }
 

}
