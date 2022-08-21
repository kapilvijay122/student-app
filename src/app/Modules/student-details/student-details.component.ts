import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.less']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private _location:Location) { }

  ngOnInit(): void {
  }
  back(){
   this._location.back();
   localStorage.removeItem("studentInfo")
  }
}
