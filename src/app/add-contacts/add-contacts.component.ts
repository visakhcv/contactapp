
import { ApicallService } from '../services/apicall.service';
import {Component ,OnInit} from '@angular/core';
import { mycontact } from '../models/mycontact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent {
  groups:any=[]
  contact:mycontact={}
  constructor(private api:ApicallService, private add:Router){
    this.contact.groupId='Choose an Option'
  }

  ngOnInit() : void {
    this.api.allgroups()
    .subscribe((result:any)=>{
      console.log(result);
      this.groups=result
    })
  }

  addcontact(contact:any){
    this.api.addcontact(contact)
    .subscribe((data:any)=>{
      alert('New contact added')
      this.add.navigateByUrl('')
    })
  }
}
