import { Component, OnInit } from '@angular/core';
import { WeddingsService } from './weddings.service';
@Component({
  selector: 'app-Weddings',
  templateUrl: './Weddings.component.html',
  styleUrls: ['./Weddings.component.css']
})
export class WeddingsComponent implements OnInit {
weddings:any;
title:any;
titleDescription:any;
p:number=1;
  constructor(public service:WeddingsService)
   {}
ngOnInit():void{
this.service.getProducts().subscribe(data=>
  {
    this.weddings=data;
  });
}
Search(){
  if(this.title==""){
    this.ngOnInit();
  }
  else{
    this.weddings=this.weddings.filter((result: { title: string; }) =>{
      return result.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
    });
  }
}




}
