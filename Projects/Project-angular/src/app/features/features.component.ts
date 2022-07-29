import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  heading="Features"
  fContent="Necessitatibus eius consequatur ex aliquid fuga eum quidem"


  features=[
    {
      id:1,
      icon:"fa fa-archive",
      fheading:"Lorem Ipsum"
    },
    {
      id:2,
      icon:"fa fa-archive",
      fheading:"Lorem Ipsum"
    }
    ,{
      id:3,
      icon:"fa fa-archive",
      fheading:"Lorem Ipsum"
    },{
      id:4,
      icon:"fa fa-archive",
      fheading:"Lorem Ipsum"
    },
    {
      id:5,
      icon:"fa fa-archive",
      fheading:"Lorem Ipsum"
    },{
      id:6,
      icon:"fa fa-archive",
      fheading:"Lorem Ipsum"
    },
    {
      id:7,
      icon:"fa fa-archive",
      fheading:"Lorem Ipsum"
    },
    {
      id:8,
      icon:"fa fa-archive",
      fheading:"Lorem Ipsum"
    },
    {
      id:9,
      icon:"fa fa-archive",
      fheading:"Lorem Ipsum"
    },
    {
      id:10,
      icon:"fa fa-archive",
      fheading:"Lorem Ipsum"
    },{
      id:11,
      icon:"fa fa-archive",
      fheading:"Lorem Ipsum"
    },
    {
      id:12,
      icon:"fa fa-archive",
      fheading:"Lorem Ipsum"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
