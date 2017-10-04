import { Injectable } from '@angular/core';
import { Item } from './item';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollectionService {
  collection: any[] = [];

  constructor(private database: AngularFireDatabase) {
    this.refreshItems();
  }

  refreshItems() {
    this.database.list('/collection').valueChanges().subscribe((data) => {
      this.collection = data;
    });
  }

  addItem(item: Item) {
    this.database.list('/collection').push(item);
    this.refreshItems();
  }
}
