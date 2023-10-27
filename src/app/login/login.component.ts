import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BackendAccessService } from '../backend-access.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data:any;
constructor(private bservice:BackendAccessService,private router:Router){
 
}
login(lForm:any){
  this.data=this.bservice.login(lForm);
}

}
