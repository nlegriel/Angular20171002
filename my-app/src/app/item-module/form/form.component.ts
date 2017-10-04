import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../item';
import { CollectionService } from '../collection.service';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;

  constructor(fb: FormBuilder, private modalService: NgbModal, private _CollectionService: CollectionService) {
    this.nameCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(2)
    ]);
    this.refCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(4)
    ]);
    this.stateCtrl = fb.control(0);
    this.form = fb.group({
      name: this.nameCtrl,
      ref: this.refCtrl,
      state: this.stateCtrl
    });
  }

  ngOnInit() {
  }


  reset() {
    this.form.reset();
    this.stateCtrl.setValue(0);
  }

  isLengthOnError(field: string) {
    return this.form.get(field).dirty && this.form.get(field).hasError('minlength');
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'Votre commande a bien été ajoutée';
  }

  addItem() {
    this._CollectionService.addItem(new Item({
      name: this.form.get('name').value,
      reference : this.form.get('ref').value,
      state: this.form.get('state').value
    }));
    this.reset();
    this.open();
   }
}
