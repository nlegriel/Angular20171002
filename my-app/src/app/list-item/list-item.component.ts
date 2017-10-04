import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../item';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  collection: Item[];

  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this._CollectionService.collection;
  }

  changeState(item: Item, state: number) {
    item.state = state;
  }
}
