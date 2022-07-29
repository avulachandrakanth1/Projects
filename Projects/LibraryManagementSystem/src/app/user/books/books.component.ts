import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./books.component.scss']
})
export class BooksComponent{

  constructor(private modalService: NgbModal) {}
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

}