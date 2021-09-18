import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { API } from '@public-apis/api-interfaces';

@Component({
  selector: 'public-apis-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent {
  @Input() apis: API[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() apiViewed = new EventEmitter();
}
