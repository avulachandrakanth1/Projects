import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private httpclient: HttpClient) { }
  employee(){
    return this.httpclient.get('http://192.168.0.114/RestApi/api/Read.php')
  }
}

