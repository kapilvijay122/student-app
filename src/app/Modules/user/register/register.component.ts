import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.formModel.reset();
  }

  onSubmit() {
    this.userService.register().subscribe((stdRes: any) => {
      if (stdRes.succeeded) {
        this.userService.formModel.reset();
        alert("User Registered Successfully");
      }
      else
      {
        stdRes.errors.array.forEach((element:any) => {
          switch(element.code){
            case 'DuplicateUserName': alert("User Already registered");
            break;
            default:
              alert(element.description);
          }
          
        });
      }
    })
  }


}
