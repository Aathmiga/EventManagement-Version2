import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from './Cart.service';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {
weddings:any;
  constructor(private service:CartService) { }
  ngOnInit():void{
    this.service.cartProducts().subscribe((data: any)=>
      {
        this.weddings=data;
      });
    }
setProduct(product:any){
  this.weddings.push(...product);
  this.weddings.next(product)
}
addToCart(product:any){
  this.weddings.push(product);
  this.weddings.next(this.weddings);
  this.getTotalAmount();
}
getTotalAmount(){
  let grandTotal=0;
  this.weddings.map((a:any)=>{
    grandTotal+=a.total;
  })
}
removeCartData(product:any){
  this.weddings.map((a:any,index:any)=>{
    if(product.id===a.id){
      this.weddings.splice(index,1)
    }
  })
}
}
