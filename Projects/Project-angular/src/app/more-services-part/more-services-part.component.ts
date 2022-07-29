import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-services-part',
  templateUrl: './more-services-part.component.html',
  styleUrls: ['./more-services-part.component.scss']
})
export class MoreServicesPartComponent implements OnInit {

  more=[
    {
      id:1,
      heading:"Lobira Duno",
      content:"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
      icon:"bi bi-arrow-right",
      read:"Read More"
    },
    {
      id:2,
      heading:"Lobira Duno",
      content:"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
      icon:"bi bi-arrow-right",
      read:"Read More"
    },
    {
      id:3,
      heading:"Lobira Duno",
      content:"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
      icon:"bi bi-arrow-right",
      read:"Read More"
    },
    {
      id:4,
      heading:"Lobira Duno",
      content:"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
      icon:"bi bi-arrow-right",
      read:"Read More"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
