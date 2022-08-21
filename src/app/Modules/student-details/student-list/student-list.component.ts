import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Shared/Shared.service';
import { StudentService } from 'src/app/Shared/student.service';
import { Studentdetails } from 'src/app/Shared/Studentdetails';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.less']
})
export class StudentListComponent implements OnInit {

  constructor(public studentService:StudentService, private sharedService:SharedService) { }

  ngOnInit(): void {
    debugger
    if(localStorage.getItem("studentInfo")){
       let getStudentInfo = JSON.parse(localStorage.getItem("studentInfo") || '{}');
      this.populateForm(getStudentInfo)
    }
    if(this.sharedService.getOption()){
      
    }
    this.studentService.refreshList();
  }

  onDelete(std:any){
    if(confirm("Are you sure delete the record?")){
      this.studentService.DeleteStudentDetailById(std).subscribe(res =>{
        this.studentService.refreshList();
        alert("record deleted");
      },
      err=>{
        console.log(err);
      })
    }
    

  }

  populateForm(pd:Studentdetails){
    debugger
    this.studentService.formData  = Object.assign({},pd);
    let studentInfo = JSON.stringify(pd);
    localStorage.setItem("studentInfo",studentInfo);
    this.sharedService.setoption('stdinfo',studentInfo);
  }
}
