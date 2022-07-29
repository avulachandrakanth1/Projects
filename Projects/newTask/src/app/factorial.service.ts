import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactorialService {
  data="hello";
  f=1;
factorial(n){
  for(var i=n;i>1;i--){
    this.f=this.f*i;
  }
  return this.f;
}
  constructor() { }
}

