import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros-part',
  templateUrl: './heros-part.component.html',
  styleUrls: ['./heros-part.component.scss']
})
export class HerosPartComponent implements OnInit {
  h1Content= "Grow your business with Vesperr";
  h2Content= "We are team of talented designers making websites with Bootstrap"
  constructor() { }

  ngOnInit(): void {
  }

}
