import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Login/Login.service';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './Home.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public loginService:LoginService,private http:HttpClient,private homeService:HomeService) { }

  users:any;
ngOnInit():void{
  this.homeService.getProducts().subscribe(data=>
    {
      this.users=data;
    });
  }
  onLogout(){
    this.loginService.onLogout();

  }

  // user(){
  //   this.http.get<any>('http://localhost:3000/users').subscribe((users)=>{
  //     const user=users.find((u:any)=>u.email===this.users.value.email && u.firstname=== this.users.value.firstname);
  //    if(user){
  //     return true;
  //    }
  //    else{
  //     return false;
  //    }
  //   })
  // }
}
