import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeddingDetailsService {

  constructor(private https:HttpClient) { }
  getProducts(){
    return this.https.get("http://localhost:3000/weddings/:check")
  }

}
