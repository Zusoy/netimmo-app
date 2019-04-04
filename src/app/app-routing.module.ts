import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import {OwnerListComponent} from './owner-list/owner-list.component';
import {OwnerFormComponent} from './owner-form/owner-form.component';
import {EstateFormComponent} from './estate-form/estate-form.component';
import {EstateListComponent} from './estate-list/estate-list.component';
import {SingleEstateComponent} from './single-estate/single-estate.component';
import {EstateEditComponent} from './estate-edit/estate-edit.component';

/**
 * Application Routes
 */
const routes = [
  {path: "owners", component: OwnerListComponent},
  {path: "owners/new", component: OwnerFormComponent},
  {path: "estates", component: EstateListComponent},
  {path: "estates/new", component: EstateFormComponent},
  {path: "estate/:id", component: SingleEstateComponent, name: "single-estate"},
  {path: "estate/edit/:id", component: EstateEditComponent, name: "edit-estate"}
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
