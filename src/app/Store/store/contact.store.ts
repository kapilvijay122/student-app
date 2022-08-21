import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Contact } from "../models/contact.model";

export interface ContactState{
    contacts:Contact[];
    
}

@Injectable()
export class ContactStore extends Store<ContactState>{
    

}