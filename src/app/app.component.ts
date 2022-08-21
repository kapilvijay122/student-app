import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'StudentInfo';
  studentInfoList: any;
  studentList: Observable<{ studentList: string[]; }> | any;
  constructor(private store:Store<{studentList:string[]}>){
    
  }
  ngOnInit(): void {
    this.studentInfoList = this.store.select('studentList')
  }

  
}
