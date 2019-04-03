import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { OwnerService } from 'src/services/OwnerService';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css'],
  providers: [OwnerService]
})
export class OwnerFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private ownerService: OwnerService
  ) 
  {
      
  }

  //build the form
  ownerForm = this.fb.group({
    lastName: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required
    ])],
    firstName: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required
    ])],
    birthDate: ['', Validators.required],
    address: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
    ])],
    addressComplementary: [''],
    postalCode: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)
    ])],
    city: ['', Validators.compose([
        Validators.required
    ])]
  });

  ngOnInit() 
  {
      
  }



  onSubmit()
  {
      if (!this.ownerForm.valid) {
          console.log("not valid");
          return;
      }

      this.ownerService.add(this.ownerForm.value);
  }

}
