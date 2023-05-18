import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeddingsService {

constructor(public http:HttpClient) { }
getProducts(){
  return this.http.get("http://localhost:3000/weddings")
}

}
