import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-class',
  templateUrl: './parent-class.component.html',
  styleUrls: ['./parent-class.component.scss']
})
export class ParentClassComponent implements OnInit {
  data = [
    {
      id: 1,
      name: 'Ram'
    },
    {
      id: 2,
      name: 'Seetha'
    },
    {
      id: 3,
      name: 'Lakshman'
    },
    {
      id: 4,
      name: 'Hanuman'
    },
    {
      id: 5,
      name: 'Ramayan'
    }
  ];
  
  hData=''
  visible=true
  isShow=true;
  message
  input:boolean=true
  
  constructor() { }

  ngOnInit(): void {
  }
clickBtn(){
  this.isShow=false
  if(this.visible==true){
    this.visible=false
  }
  else{
    this.visible=true
  }
  }
}
