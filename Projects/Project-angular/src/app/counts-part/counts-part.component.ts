import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counts-part',
  templateUrl: './counts-part.component.html',
  styleUrls: ['./counts-part.component.scss']
})
export class CountsPartComponent implements OnInit {

  counts=[
    {
      id:1,
      icon:"fas fa-smile",
      count:68,
      bold:"Happy Clients",
      content:"consequuntur voluptas nostrum aliquid ipsam architecto ut."
    },
    {
      id:2,
      icon:"fas fa-project-diagram",
      count:78,
      bold:"Projects",
      content:"consequuntur voluptas nostrum aliquid ipsam architecto ut."
    },
    {
      id:3,
      icon:"fas fa-history",
      count:68,
      bold:"Years of experiance",
      content:"consequuntur voluptas nostrum aliquid ipsam architecto ut."
    },
    {
      id:4,
      icon:"fas fa-trophy",
      count:68,
      bold:"Award",
      content:"rerum asperiores dolor alias quo reprehenderit eum et nemo pad der"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
