import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';
import { HomeComponent } from './Modules/home/home.component';
import { StoreComponent } from './Modules/store/store/store.component';
import { StudentDetailComponent } from './Modules/student-details/student-detail/student-detail.component';
import { StudentDetailsComponent } from './Modules/student-details/student-details.component';
import { LoginComponent } from './Modules/user/login/login.component';
import { RegisterComponent } from './Modules/user/register/register.component';
import { UserComponent } from './Modules/user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'user/register',pathMatch:'full'},
  {
    path:'user',component:UserComponent,
    children:[
      {path:'register',component:RegisterComponent},
      {path:'login',component:LoginComponent}
    ]
  },
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'store',component:StoreComponent,canActivate:[AuthGuard]},
  {path:'stdinfo/:id',component:StudentDetailsComponent,canActivate:[AuthGuard]},
  {path:'studentdetail',component:StudentDetailComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
