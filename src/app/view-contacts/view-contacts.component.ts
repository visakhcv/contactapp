import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent{

  contactid:string = ""
  contactresult:any={}
  groupname:string=""
  // dependency injected from activatedroute
  constructor (private activatedRoute:ActivatedRoute,private api:ApicallService){

  }

  ngOnInit():void{
    // to get path parameter from url
    this.activatedRoute.params.subscribe((data:any)=>{
      
      this.contactid = data.id
      console.log(this.contactid);
      
    })
    // get details of particular contact
    this.api.viewcontact(this.contactid)
    .subscribe((result)=>{
      console.log(result);
      this.contactresult = result
      // get group id in contact
      let groupId = this.contactresult.groupId
      console.log(groupId);
      
      this.api.viewcontactgroup(groupId)
      .subscribe((data:any)=>{
        console.log(data);
        this.groupname = data.name
      })
    })
  }
}
