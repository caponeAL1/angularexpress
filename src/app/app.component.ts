import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BackendAccessService } from './backend-access.service';
import { Router } from '@angular/router';
import{NavigationEnd,NavigationStart} from '@angular/router';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userList:any=[];
   title = 'AngularExpress';
  detailsArray:any = [];
  enable: boolean = false;
  getuserarray:any = [];
  data:any;
  expresponse : string="";
  constructor(private http:HttpClient,private baccess:BackendAccessService,private router:Router){
  }
  // getAllUsers(){
  //   this.detailsArray=this.baccess.getAllUsers();
  // }
  // addUser(uData:any){
  //   this.expresponse=this.baccess.addUser(uData);
  // }
  //  updateUser(uData:any){
  //    this.http.put('http://localhost:9999/UpdateUser',uData.value).subscribe((res)=>{
  //      this.getuserarray = res;
  //      console.log(this.getuserarray);
  //    });
  //   }
  //   deleteUser(uData:any){
  //     this.http.delete(`http://localhost:9999/DeleteUser?id=${uData.value.id}`).subscribe((res)=>{
  //       this.getuserarray = res;
  //       console.log(this.getuserarray);
  //     });
  //   }
    show:boolean=false;
    ngOnInit(){
      this.router.navigate(['login']);
      this.router.events.subscribe((event)=>{
         if(event instanceof NavigationEnd){
          const url = event.url;
          if(url=='/login'){
            this.show=true;
          }
          else{
            this.show=false;
          }
         }
      })
    }
   
}
 