import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from '../list-item/list-item.component';
import { FormComponent } from '../form/form.component';

const appRoutes: Routes = [
  { path: 'list', component: ListItemComponent },
  { path: 'form', component: FormComponent },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
