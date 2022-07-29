import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private httpclient:HttpClient) { }
 
  get(url){
    return this.httpclient.get(url);
  }
 post(url,body) {
  return this.httpclient.post(url,body);
 }
}
