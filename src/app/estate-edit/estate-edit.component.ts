import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {EstateService} from '../../services/EstateService';
import {OwnerService} from '../../services/OwnerService';
import { Estate } from 'src/models/Estate';
import { Owner } from 'src/models/Owner';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-estate-edit',
  templateUrl: './estate-edit.component.html',
  styleUrls: ['./estate-edit.component.css'],
  providers: [EstateService]
})
export class EstateEditComponent implements OnInit {

  estate: Estate;
  owners: Owner[];

  constructor(
    private estateService: EstateService, 
    private ownerService: OwnerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
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
    let estateId = 0;

    this.activatedRoute.params.subscribe(param => {
      estateId = param['id'];
    });

    this.owners = this.ownerService.getAll();
    this.estate = this.estateService.findById(estateId);
    
    if (this.estate == undefined) {
      this.router.navigate(['estates']);
    }

    this.estateForm.patchValue({
      title: this.estate.title,
      description: this.estate.description,
      price: this.estate.price,
      area: this.estate.area,
      address: this.estate.address,
      addressComplementary: this.estate.addressComplementary,
      postalCode: this.estate.postalCode,
      city: this.estate.city,
      reference: this.estate.reference,
      sector: this.estate.sector,
      country: this.estate.country,
      longitude: this.estate.longitude,
      latitude: this.estate.latitude,
      picture: this.estate.picture,
      owner: this.estate.owner.id
    });
  }


  onSubmit()
  {
    if (!this.estateForm.valid) {
      return;
    }

    //set object
    this.estateForm.value.owner = (typeof this.estateForm.value.owner != 'object')
      ? this.ownerService.findById(
        this.estateForm.value.owner)
      : this.estateForm.value.owner;
    
    //update
    this.estateService.update(this.estate.id, this.estateForm.value);
  }

}
