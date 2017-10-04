import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() msg;

  constructor(public activeModal: NgbActiveModal, private _Router: Router) {}

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this._Router.navigate(['/list']);
  }
}
