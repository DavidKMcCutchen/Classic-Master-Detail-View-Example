import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { API, emptyAPI } from '@public-apis/api-interfaces';
import { APIFacade } from '@public-apis/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'public-apis-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class APIsComponent implements OnInit {
  allAPIs$: Observable<API[]> = this.apiFacade.allAPIs$;
  selectedAPI$: Observable<API> = this.apiFacade.selectedAPIs$;

  form: FormGroup;

  constructor(
    private apiFacade: APIFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.apiFacade.mutations$.subscribe((_) => this.resetAPI());
  }

  ngOnInit() {
    this.initForm();
    this.apiFacade.loadAPIs();
    this.resetAPI()

    const apiRouteId = this.route.snapshot.params['API'];

    if (apiRouteId) {
      this.loadAPI((apiRouteId))
    }
  }

  viewAPI(apiId: string) {
    this.router.navigate(["API", apiId])
  }

  loadAPI(apiId: string) {
    this.apiFacade.selectAPI(apiId);
    this.apiFacade.loadAPI(apiId);
  }

  selectAPI(api: API) {
    this.apiFacade.selectAPI(api.API)
    this.form.patchValue(api);
  }

  saveAPI(api: API) {
    this.apiFacade.saveAPI(api);
  }

  deleteAPI(api: API) {
    this.apiFacade.deleteAPI(api);
  }

  resetAPI() {
    this.form.reset();
    this.selectAPI(emptyAPI)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      API: ['', Validators.required],
      Description: ['', Validators.required],
      Auth: ['', Validators.required],
      HTTPS: [false, Validators.required],
      Cors: ['', Validators.required],
      Link: ['', Validators.required],
      Category: ['', Validators.required]
    })
  }
}
