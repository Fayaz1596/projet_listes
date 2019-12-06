import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from '../base-service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit 
{
  id:number;
  constructor(private route: ActivatedRoute, private baseService: BaseService) 
  {
      this.route.params.subscribe(params => this.id = params.id)
  }

  ngOnInit() 
  {
  }
}
