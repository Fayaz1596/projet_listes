import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base-service';

@Component({
  selector: 'app-list',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit 
{
  bieres;
  constructor(private baseService: BaseService) 
  { 
  }

  ngOnInit() 
  {
      this.getBeers();
  }

  getBeers()
  {
      this.baseService.getBeers()
        .subscribe(donnee => {
          this.bieres = donnee;
        });
  }
}