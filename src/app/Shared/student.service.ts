import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Studentdetails } from './Studentdetails';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  formData:Studentdetails = {
    stdId: 0,
    studentName: null,
    studentAddress: null,
    dob: null,
    gender: null
  }
list:any = Studentdetails ;
readonly apiUrl = "https://localhost:44318/api";
  constructor(private http:HttpClient) { }

  AddStudentDetail(){
    var header = new HttpHeaders({'Authorization' : 'Bearer ' + localStorage.getItem('token')});
    return this.http.post(this.apiUrl +'/StudentDetails',this.formData,{headers:header});
  }
  
  
  UpdateStudentDetail(){
    var header = new HttpHeaders({'Authorization' : 'Bearer ' + localStorage.getItem('token')});
    return this.http.put(this.apiUrl +'/StudentDetails' + this.formData.stdId, this.formData,{headers:header});
  }

  DeleteStudentDetailById(id:any){
    var header = new HttpHeaders({'Authorization' : 'Bearer ' + localStorage.getItem('token')});
    return this.http.delete(this.apiUrl +'/StudentDetails/' + id,{headers:header});
  }

  readAllRecords():Observable<Studentdetails[]>{
    var header = new HttpHeaders({'Authorization' : 'Bearer ' + localStorage.getItem('token')});
    return this.http.get<Studentdetails[]>(this.apiUrl+'/StudentDetails',{headers:header})
  }

  refreshList1(){
    var header = new HttpHeaders({'Authorization' : 'Bearer ' + localStorage.getItem('token')});
    this.http.get(this.apiUrl+'/StudentDetails',{headers:header});
  }

  refreshList(){
    var header = new HttpHeaders({'Authorization' : 'Bearer ' + localStorage.getItem('token')});
    this.http.get(this.apiUrl+'/StudentDetails',{headers:header}).toPromise().then(res => this.list = res as Studentdetails);
  }
}
