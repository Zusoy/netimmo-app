import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerFormComponent } from './owner-form/owner-form.component';
import { EstateFormComponent } from './estate-form/estate-form.component';
import { EstateListComponent } from './estate-list/estate-list.component';
import { SingleEstateComponent } from './single-estate/single-estate.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerListComponent,
    OwnerFormComponent,
    EstateFormComponent,
    EstateListComponent,
    SingleEstateComponent
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
