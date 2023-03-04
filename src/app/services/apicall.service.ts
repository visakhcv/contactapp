import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }

  allcontacts(){
  return  this.http.get('http://localhost:3000/contacts')
  }
  // api to get a particular contact
  viewcontact(contactid:string){
    return this.http.get('http://localhost:3000/contacts/'+contactid)
  }

  viewcontactgroup(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)
  }
  allgroups(){
    return this.http.get('http://localhost:3000/groups')
  }

  addcontact(contact:any){
    return this.http.post('http://localhost:3000/contacts',contact)
  }
  deletecontact(id:any){
    return this.http.delete('http://localhost:3000/contacts/'+id)
  }
  updatecontact(contactid:string,contactbody:any){
    return this.http.put('http://localhost:3000/contacts/'+contactid,contactbody)
  }
}
