import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
 
  
  detailsArray:any = [];
  getuserarray:any=[];
  httpClient: any;
  contactArray:any=[];
  data: any= [];
 // expresponse: string="";
  constructor(private http:HttpClient,private router:Router){

  }
  getAllUsers(){
    this.http.get('http://localhost:9999/DisplayAllUser').subscribe((res)=>{
      this.detailsArray = res;
      console.log(this.detailsArray);
    });
    return this.detailsArray;
  }

  addUser(uData:any):any{
    this.http.post('http://localhost:8080/AddUser',uData.value).subscribe((res)=>{
       this.getuserarray = res;
       console.log(this.detailsArray);
     // this.expresponse=res.toString();
    });
    return this.addContact;
  }
  getAllContacts()
  {
    this.http.get('http://localhost:9999/DisplayAllContact').subscribe((res)=>{
      this.contactArray=res;
      console.log(this.contactArray);
 
    });
    return this.contactArray;
   
  }
  addContact(userForm:any){
    console.log(userForm.value);
   this.http.post('http://localhost:9999/addContacts',userForm.value).subscribe((data: any) => {
      this.data = data;
    })
  }
  updateContact(userForm:any){
    console.log(userForm.value);
    this.http.put('http://localhost:9999/UpdateContact',userForm.value).subscribe((response: any) => {
      this.data = response;
    })
  }
  deleteContact(userForm:any){
    this.http.delete(`http://localhost:9999/DeleteContact?firstName=${userForm.value.firstName}`).subscribe((response: any) => {
      this.data = response;
      console.log(response);
    })
  }

  login(lForm:any):any{
    this.http.get(`http://localhost:9999/Login?id=${lForm.value.id}&pass=${lForm.value.pass}`).subscribe((response)=>{
      this.data = response;
      console.log(this.data);
      if(this.data){
        this.router.navigate(['Home']);
      }
      else{
        alert('Invalid Username or Password');
      }
    });
    return this.data;
   
  }
  
  }

