import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from '../Login/Login.service';
import { CartService } from '../Cart/Cart.service';
@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalitem = 0;

  constructor(private http:HttpClient,public loginService:LoginService,private service:CartService) { }

  ngOnInit() {
    this.service.cartProducts().subscribe((res:  any)=>
      {
        this.totalitem = res.length;
      })
  }

onLogout(){
  this.loginService.onLogout();

}




}




