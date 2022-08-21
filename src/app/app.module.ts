import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Modules/user/login/login.component';
import { RegisterComponent } from './Modules/user/register/register.component';
import { UserComponent } from './Modules/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Modules/home/home.component';
import { StudentDetailsComponent } from './Modules/student-details/student-details.component';
import { StudentDetailComponent } from './Modules/student-details/student-detail/student-detail.component';
import { StudentListComponent } from './Modules/student-details/student-list/student-list.component';
import { StoreModule } from '@ngrx/store';
import { StoreComponent } from './Modules/store/store/store.component';
import { SharedService } from './Shared/Shared.service';
import { studentListReducer } from './Store/Reducer/studentList.reducer';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    StudentDetailsComponent,
    StudentDetailComponent,
    StudentListComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(studentListReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
