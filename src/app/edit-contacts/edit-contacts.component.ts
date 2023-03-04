import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mycontact } from '../models/mycontact';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.css']
})
export class EditContactsComponent {

  contactid:string=""
  contact:mycontact={}
  allgroups:any= []
  constructor (private editcontactactivated:ActivatedRoute,private api:ApicallService,private editcontactrouter:Router){

  }

  ngOnInit(): void{
    this.editcontactactivated.params
    .subscribe((data:any)=>{
      this.contactid=data.id
      console.log(this.contactid);
      
    })

  this.api.viewcontact(this.contactid)
  .subscribe((result:any)=>{
    this.contact=result
    console.log(this.contact);
   
  })

  this.api.allgroups()
  .subscribe((groups:any)=>{
    console.log(groups);
    this.allgroups=groups
  })


  }

  editcontact(contact:mycontact){
    this.api.updatecontact(this.contactid,contact)
    .subscribe((result:any)=>{
      alert('Contact Details are updated')
      this.editcontactrouter.navigateByUrl('')
    })
  }

}
