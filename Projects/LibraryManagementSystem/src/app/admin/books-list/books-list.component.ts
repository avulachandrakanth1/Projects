import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/apiService/api.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  // magazine=[
  //   {
  //     id:1,
  //     image:"https://marketplace.canva.com/EAFAj6djfbU/1/0/283w/canva-black-orange-elegant-modern-car-magazine-e3kL-pFIs-A.jpg",
  //     name:"Black Orange Elegant Modern Car Magazine"
  //   },
  //   {
  //     id:2,
  //     image:"https://marketplace.canva.com/EAFAj6djfbU/1/0/283w/canva-black-orange-elegant-modern-car-magazine-e3kL-pFIs-A.jpg",
  //     name:"Black Orange Elegant Modern Car Magazine"
  //   },
  //   {
  //     id:3,
  //     image:"https://marketplace.canva.com/EAFAj6djfbU/1/0/283w/canva-black-orange-elegant-modern-car-magazine-e3kL-pFIs-A.jpg",
  //     name:"Black Orange Elegant Modern Car Magazine"
  //   },
  //   {
  //     id:4,
  //     image:"https://marketplace.canva.com/EAFAj6djfbU/1/0/283w/canva-black-orange-elegant-modern-car-magazine-e3kL-pFIs-A.jpg",
  //     name:"Black Orange Elegant Modern Car Magazine"
  //   }
  // ]

  books=[
    {
    id:1,
    image:"https://bp5-assets-2.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/05/31143032/cranewife.jpg",
    name:"The Crane Wife",
    authorName:"Review by Carla Jean Whitley",
    description:"In this collection of essays, CJ Hauser excavates her past loves and losses, thoughtfully examines their aftermath and declares the pain of love to be worth the risk."
  },
  {
    id:2,
    image:"https://bp5-assets-2.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/05/31144933/normalfamily.jpg",
    name:"Normal Family",
    authorName:"Review by Jessica Wakeman",
    description:"Is there anything original left to say about surviving a dysfunctional upbringing? Normal Family by Chrysta Bilton takes this question almost as a dare."
  },
  {
    id:3,
    image:"https://bp5-assets-2.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/05/31143107/deathbybubbletea.jpg",
    name:"Death by Bubble Tea",
    authorName:"Review by Jamie Orsini",
    description:"Death by Bubble Tea is a heartfelt and delicious mystery that, in a brilliant choice by author Jennifer J. Chow, centers on a family-run food stall."
  },
  {
    id:4,
    image:"https://bp5-assets-2.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/05/31143652/hawkmountain.jpg",
    name:"Hawk Mountain",
    authorName:"Review by Maya Fleischmann",
    description:"With haunting prose and deeply atmospheric descriptions, Conner Habib’s Hawk Mountain is a disturbing descent into the convulsions of the human mind and heart."
  },
  ]
  book:any={}
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
  }
  bookDetails(){
    console.log(this.book)
  }
}
