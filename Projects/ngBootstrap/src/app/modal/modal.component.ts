import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  template: `
    <div class="container">
    <div class="modal-header">
    <h4 class="modal-title">Hi there!</h4>
    <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
  </div>
  <div class="modal-body">
    <p>Hello, {{name}}!</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
  </div>
  </div>
  `
})
export class ngModalComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({selector: 'app-modal-component', templateUrl: './modal.component.html'})
export class ModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(ngModalComponent);
    modalRef.componentInstance.name = 'BCP';
  }
}
