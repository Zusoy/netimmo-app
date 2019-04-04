import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Estate } from 'src/models/Estate';
import {EstateService} from '../../services/EstateService';

@Component({
  selector: 'app-single-estate',
  templateUrl: './single-estate.component.html',
  styleUrls: ['./single-estate.component.css'],
  providers: [EstateService]
})
export class SingleEstateComponent implements OnInit {

  estate: Estate;

  constructor(
    private activatedRoute: ActivatedRoute,
    private estateService: EstateService,
    private router: Router
    ) { }

    
  ngOnInit() 
  {
    let estateId = 0;

    this.activatedRoute.params.subscribe(params => {
      estateId = params['id'];
    });

    this.estate = this.estateService.findById(estateId);

    if (this.estate == undefined) {
      this.router.navigate(['estates']);
    }
  }

}
