import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent implements OnInit {
  headers=["Sno","User Name","Book Name","Return Date",""]
  rows=[
    {
      id:1,
      sno:1,
      username:"Sai",
      bookname:"Environment Pollution",
      returndate:"13-06-2022"
      
    },
    {
      id:2,
      sno:2,
      username:"Sireesh",
      bookname:"The One",
      returndate:"14-06-2022"
      
    },
    {
      id:3,
      sno:3,
      username:"Hanish",
      bookname:"Story Book",
      returndate:"19-06-2022"
      
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
