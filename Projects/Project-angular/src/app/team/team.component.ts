import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  heading=' Team'
  tContent="Necessitatibus eius consequatur ex aliquid fuga eum quidem"

  team=[
    {
      id:1,
      img:'https://bootstrapmade.com/demo/templates/Vesperr/assets/img/team/team-1.jpg',
      name:'Clay Jackson',
      designation:'CEO'
    },
    {
      id:2,
      img:'https://bootstrapmade.com/demo/templates/Vesperr/assets/img/team/team-2.jpg',
      name:'Hannah Baker',
      designation:'Executive Officer'
    },
    {
      id:3,
      img:'https://bootstrapmade.com/demo/templates/Vesperr/assets/img/team/team-3.jpg',
      name:'Well Jackson',
      designation:'Business Analyst'
    },
    {
      id:4,
      img:'https://bootstrapmade.com/demo/templates/Vesperr/assets/img/team/team-4.jpg',
      name:'Eleven',
      designation:'Testing Specialist'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
