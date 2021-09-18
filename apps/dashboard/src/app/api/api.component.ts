import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIFacade } from '@public-apis/core-state';

@Component({
  selector: 'public-apis-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class APIComponent implements OnInit {

  currentAPI$ = this.apiFacade.selectedAPIs$


  constructor(
    private apiFacade: APIFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const apiId = this.route.snapshot.params.API;
    this.loadAPI(apiId);
  }

  loadAPI(apiId: string) {
    this.apiFacade.selectAPI(apiId);
    this.apiFacade.loadAPI(apiId);
  }

  navigateBack() {
    this.router.navigate(['/entities']);
  };

}
