import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit{
// to hold all contacts data from get
  allcontacts:any= []
  searchkey:string=""
  constructor (private api:ApicallService) {}

  ngOnInit(): void {
    this.getallcontact()
  }

    getallcontact(){
      // api call to get all contacts
      this.api.allcontacts()
      .subscribe((result)=>{
      // result is the all contact array from api
      console.log(result);
      this.allcontacts= result    
        } )
    }

  deletecontact(id:any){
    this.api.deletecontact(id)
    .subscribe((data:any)=>{
      this.getallcontact()
    })
  }
}
