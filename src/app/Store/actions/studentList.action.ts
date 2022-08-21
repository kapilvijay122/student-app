import { Action } from "@ngrx/store";

export const ADD_USER = 'ADD_USER'
 
export class StudentListAction implements Action{
    readonly type = ADD_USER;
    payload: any;
    
}