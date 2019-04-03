import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerFormComponent } from './owner-form/owner-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerListComponent,
    OwnerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
