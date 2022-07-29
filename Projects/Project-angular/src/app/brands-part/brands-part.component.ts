import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands-part',
  templateUrl: './brands-part.component.html',
  styleUrls: ['./brands-part.component.scss']
})
export class BrandsPartComponent implements OnInit {
  brands=[
    {
      id:1,
      img:"https://bootstrapmade.com/demo/templates/Vesperr/assets/img/clients/client-1.png"
    },
    {
      id:2,
      img:"https://bootstrapmade.com/demo/templates/Vesperr/assets/img/clients/client-2.png"
    },
    {
      id:3,
      img:"https://bootstrapmade.com/demo/templates/Vesperr/assets/img/clients/client-3.png"
    },
    {
      id:4,
      img:"https://bootstrapmade.com/demo/templates/Vesperr/assets/img/clients/client-4.png"
    },
    {
      id:5,
      img:"https://bootstrapmade.com/demo/templates/Vesperr/assets/img/clients/client-5.png"
    },
    {
      id:6,
      img:"https://bootstrapmade.com/demo/templates/Vesperr/assets/img/clients/client-6.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
