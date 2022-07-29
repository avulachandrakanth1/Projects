import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-part',
  templateUrl: './portfolio-part.component.html',
  styleUrls: ['./portfolio-part.component.scss']
})
export class PortfolioPartComponent implements OnInit {
  heading="Portfolio"
  pContent="Necessitatibus eius consequatur ex aliquid fuga eum quidem"

  constructor() { }

  ngOnInit(): void {
  }

}
