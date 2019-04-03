import { Component, OnInit } from '@angular/core';
import { Estate } from 'src/models/Estate';
import {EstateService} from '../../services/EstateService';

@Component({
  selector: 'app-estate-list',
  templateUrl: './estate-list.component.html',
  styleUrls: ['./estate-list.component.css'],
  providers: [EstateService]
})
export class EstateListComponent implements OnInit 
{
  estates: Estate[] = [];


  constructor(
    private estateService: EstateService
  ) { }

  ngOnInit() {

    this.estates = this.estateService.getAll();
  }

  deleteEstate(estate: Estate)
  {
    this.estateService.remove(estate.getId());
  }

}
