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
  owners: Owner[];

  constructor(
    private ownerService: OwnerService
  ) 
  { 
    
  }


  ngOnInit() 
  {
    this.owners = this.ownerService.getAll(); //get service owners
  }


  /**
   * Delete Owner Action
   * @param owner Owner to Delete
   */
  deleteOwner(owner: Owner)
  {
      this.ownerService.remove(owner.id);
  }

}
