import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import {OwnerListComponent} from './owner-list/owner-list.component';
import {OwnerFormComponent} from './owner-form/owner-form.component';

/**
 * Application Routes
 */
const routes = [
  {path: "owners", component: OwnerListComponent},
  {path: "owners/new", component: OwnerFormComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
