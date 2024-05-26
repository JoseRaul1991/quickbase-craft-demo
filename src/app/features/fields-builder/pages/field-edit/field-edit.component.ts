import { Component } from '@angular/core';
import { FIELDS_BUILDER_ROUTE } from '~app/core/constants';

@Component({
  selector: 'app-field-edit',
  templateUrl: './field-edit.component.html',
  styleUrls: ['./field-edit.component.scss'],
})
export class FieldEditComponent {
  FIELDS_BUILDER_ROUTE = FIELDS_BUILDER_ROUTE;
}
