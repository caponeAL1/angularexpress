import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendAccessService } from '.././backend-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userList:any=[];
   title = 'AngularExpress';
  detailsArray:any = [];
  enable: boolean = false;
  getuserarray:any = [];
  data:any;
  expresponse : string="";
  
  constructor(private http:HttpClient,private baccess:BackendAccessService){
  }
  getAllUsers(){
    this.detailsArray=this.baccess.getAllUsers();
  }
  addUser(uData:any){
    this.expresponse=this.baccess.addUser(uData);
  }
   updateUser(uData:any){
     this.http.put('http://localhost:9999/UpdateUser',uData.value).subscribe((res)=>{
       this.getuserarray = res;
       console.log(this.getuserarray);
     });
    }
    deleteUser(uData:any){
      this.http.delete(`http://localhost:9999/DeleteUser?id=${uData.value.id}`).subscribe((res)=>{
        this.getuserarray = res;
        console.log(this.getuserarray);
      });
    }
}
