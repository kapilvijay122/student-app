import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/app/Shared/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.less']
})
export class StudentDetailComponent implements OnInit {

  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    if(this.studentService.formData.stdId ==0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
    localStorage.removeItem("StudentInfo")

  }
  insertRecord(form:NgForm){
    this.studentService.AddStudentDetail().subscribe(
      stdRes =>
      {
        this.resetForm(form);
        alert("Record Inserted Successfully");
        this.studentService.refreshList();
    },
    err=>{
      console.log(err);
    }
    )

  }
  updateRecord(form:NgForm){
    this.studentService.UpdateStudentDetail().subscribe((res:any)=>{
      this.resetForm(form);
      alert("Record Updated Successfully");
      this.studentService.refreshList();
    },
    err=>{
      console.log(err);
    })

  }

  resetForm(form:NgForm){
    if(form!=null){
      form.form.reset();
      this.studentService.formData ={
        stdId: 0,
    studentName: '',
    studentAddress: '',
    dob: '',
    gender: ''
      }
    }
  }

}
