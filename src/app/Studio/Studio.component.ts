import { Component, OnInit } from '@angular/core';
import { StudioService } from './Studio.service';

@Component({
  selector: 'app-Studio',
  templateUrl: './Studio.component.html',
  styleUrls: ['./Studio.component.css']
})
export class StudioComponent  {

  studio:any;
  constructor(private service:StudioService)
   {
this.service.getProducts().subscribe(data=>
  {
    this.studio=data;
  })
};

}
