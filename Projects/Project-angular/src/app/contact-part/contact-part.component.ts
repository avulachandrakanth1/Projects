import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-part',
  templateUrl: './contact-part.component.html',
  styleUrls: ['./contact-part.component.scss']
})
export class ContactPartComponent implements OnInit {
  heading='Vesperr'
  contactContent='Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.'

  constructor() { }

  ngOnInit(): void {
  }

}
