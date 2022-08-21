import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private data ={};

  constructor() { }
 setoption(option:any,value:any){
  this.data= value;
 }
 getOption(){
  return this.data;
 }

}