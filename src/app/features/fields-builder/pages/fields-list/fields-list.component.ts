import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FieldsStore } from '../../store/reducer';
import { zoomIn } from '~app/core/animations';
import { Field } from '../../models/field';
import {
  selectFields,
  selectFieldsError,
  selectFieldsLoading,
} from '../../store/fields/selectors';

@Component({
  selector: 'app-fields-list',
  templateUrl: './fields-list.component.html',
  styleUrls: ['./fields-list.component.scss'],
  animations: [zoomIn],
})
export class FieldsListComponent {
  private store = inject(Store<FieldsStore>);

  fields$ = this.store.select(selectFields);
  loading$ = this.store.select(selectFieldsLoading);
  error$ = this.store.select(selectFieldsError);

  deleteField(field: Field) {
    alert(
      `Not Implemented Yet. But we know you are trying to Delete field: ${field.label}`
    );
  }
}
