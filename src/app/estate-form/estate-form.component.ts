import { Component, OnInit } from '@angular/core';
import {EstateService} from '../../services/EstateService';
import {OwnerService} from '../../services/OwnerService';
import {FormBuilder, Validators} from '@angular/forms';
import { Owner } from 'src/models/Owner';

@Component({
  selector: 'app-estate-form',
  templateUrl: './estate-form.component.html',
  styleUrls: ['./estate-form.component.css'],
  providers: [EstateService]
})
export class EstateFormComponent implements OnInit 
{
  owners: Owner[] = [];


  constructor(
    private estateService: EstateService,
    private ownerService: OwnerService,
    private fb: FormBuilder
  ) { }

  
  estateForm = this.fb.group({
    title: ['', Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50)
    ])],
    description: ['', Validators.compose([
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200)
    ])],
    price: ['', Validators.required],
    area: ['', Validators.required],
    address: ['', Validators.required],
    addressComplementary: [''],
    postalCode: ['', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(6)
    ])],
    city: ['', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100)
    ])],
    reference: ['', Validators.required],
    sector: ['', Validators.compose([
      Validators.required,
      Validators.maxLength(100)
    ])],
    country: ['', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(100)
    ])],
    longitude: [''],
    latitude: [''],
    picture: [''],
    owner: ['', Validators.required]
  });


  ngOnInit() 
  {
      this.owners = this.ownerService.getAll();
  }

  onSubmit()
  {
      if (!this.estateForm.valid) {
        return;
      }

      this.estateForm.value.owner = Number.parseInt(this.estateForm.value.owner);
      console.log(this.estateForm.value);
      this.estateService.add(this.estateForm.value);
      this.estateForm.reset();
  }

}
