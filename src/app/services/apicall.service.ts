import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }

  allcontacts(){
  return  this.http.get('https://contact-server-qoix.onrender.com/contacts')
  }
  // api to get a particular contact
  viewcontact(contactid:string){
    return this.http.get('https://contact-server-qoix.onrender.com/contacts/'+contactid)
  }

  viewcontactgroup(groupId:string){
    return this.http.get('https://contact-server-qoix.onrender.com/groups/'+groupId)
  }
  allgroups(){
    return this.http.get('https://contact-server-qoix.onrender.com/groups')
  }

  addcontact(contact:any){
    return this.http.post('https://contact-server-qoix.onrender.com/contacts',contact)
  }
  deletecontact(id:any){
    return this.http.delete('https://contact-server-qoix.onrender.com/contacts/'+id)
  }
  updatecontact(contactid:string,contactbody:any){
    return this.http.put('https://contact-server-qoix.onrender.com/contacts/'+contactid,contactbody)
  }
}
