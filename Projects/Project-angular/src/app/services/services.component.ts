import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  heading="services"
  sContent="Magnam dolores commodi suscipit eius consequatur ex aliquid fug"


  services=[
    {
      id:1,
      icon:"fas fa-basketball-ball",
      heading:"Lorem Ipsum",
      content:" Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
    },
    {
      id:2,
      icon:"fas fa-copy",
      heading:"Lorem Ipsum",
      content:" Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
    },
    {
      id:3,
      icon:"fas fa-basketball-ball",
      heading:"Lorem Ipsum",
      content:" Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
    },
    {
      id:4,
      icon:"fas fa-copy",
      heading:"Lorem Ipsum",
      content:" Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
