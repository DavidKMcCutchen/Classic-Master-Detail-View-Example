import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDetailsComponent } from './api-details.component';

describe('ApiDetailsComponent', () => {
  let component: ApiDetailsComponent;
  let fixture: ComponentFixture<ApiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
