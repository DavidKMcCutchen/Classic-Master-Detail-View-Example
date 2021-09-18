import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { API } from '@public-apis/api-interfaces';
import { APIFacade } from '@public-apis/core-state';

@Component({
  selector: 'public-apis-api-info',
  templateUrl: './api-info.component.html',
  styleUrls: ['./api-info.component.scss']
})
export class ApiInfoComponent {

  @Input() api: API | null;


  constructor(
    private apiFacade: APIFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateBack() {
    this.router.navigate(['/entries']);
  };

}
