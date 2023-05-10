import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from '../Login/Login.service';
@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http:HttpClient,public loginService:LoginService) { }

  ngOnInit() {
  }
// loggedin(){
//   return this.http.get('user');
// }
// onlogout(){
//  return this.http.delete('user');
// }
onLogout(){
  this.loginService.onLogout();

}

// // header change
// header1=true;
// header2=false;
// @HostListener('window.scroll',['$event'])
//   onWindowScroll(event:any){
//     if(window.pageYOffset>=20){
// this.header1=false;
// this.header2=true;
//     }
//     else{
//       this.header1=true;
//       this.header2=false;
//     }
//   }
}




