import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/services/OwnerService';
import { Owner } from 'src/models/Owner';

@Component({
  selector: 'owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css'],
  providers: [OwnerService]
})
export class OwnerListComponent implements OnInit 
{

  owners:Owner[];

  constructor(
    private ownerService: OwnerService
  ) 
  { 
    this.owners = ownerService.models; //get service owners
  }


  deleteOwner(owner: Owner)
  {
    this.ownerService.remove(owner.id);
  }

  ngOnInit() {
  }

}
