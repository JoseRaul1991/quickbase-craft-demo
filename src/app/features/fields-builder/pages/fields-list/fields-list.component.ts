import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { zoomIn } from '~app/core/animations';
import { Field } from '../../models';
import { FieldsActions } from '../../store/fields/actions';
import {
  selectFields,
  selectFieldsLoading,
  selectFieldsError,
  selectDeleteLoading,
} from '../../store/fields/selectors';
import { FieldsStore } from '../../store/reducer';

@Component({
  selector: 'app-fields-list',
  templateUrl: './fields-list.component.html',
  styleUrls: ['./fields-list.component.scss'],
  animations: [zoomIn],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
