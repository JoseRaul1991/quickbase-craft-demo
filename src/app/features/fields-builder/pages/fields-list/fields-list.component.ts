import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FieldsStore } from '../../store/reducer';
import { zoomIn } from '~app/core/animations';
import { Field } from '../../models/field';
import { FieldsActions } from '../../store/fields/actions';
import { selectDeleteLoading } from '../../store/fields/delete/selectors';
import {
  selectFields,
  selectFieldsError,
  selectFieldsLoading,
} from '../../store/fields/fetch/selectors';

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

  loadingDelete$ = this.store.select(selectDeleteLoading);

  deleteField(field: Field) {
    this.store.dispatch(FieldsActions.remove({ id: field.id }));
  }
}
