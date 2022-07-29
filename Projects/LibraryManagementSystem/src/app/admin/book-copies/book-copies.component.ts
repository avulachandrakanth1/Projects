import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-copies',
  templateUrl: './book-copies.component.html',
  styleUrls: ['./book-copies.component.scss']
})
export class BookCopiesComponent implements OnInit {
  headers=["Sno","Book Name","ISBN",""]
  rows=[
    {
      id:1,
      sno:1,
      bookname:"bodyParts",
      isbn:"sci34",
      
    },
    {
      id:1,
      sno:2,
      bookname:"The One",
      isbn:"rms35",
      
    }
  ]
  constructor() { }
copies:any={}
  ngOnInit(): void {
  }
  bookCopies(){
console.log(this.copies)
  }
}
