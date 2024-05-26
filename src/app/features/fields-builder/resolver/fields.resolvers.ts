import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { FieldsActions } from '../store/fields/actions';
import { selectFields } from '../store/fields/selectors';
import { FieldsStore } from '../store/reducer';

@Injectable({
  providedIn: 'root',
})
export class FieldsResolver {
  private store = inject(Store<FieldsStore>);
  private fields = toSignal(this.store.select(selectFields));

  resolve() {
    if (this.fields()) {
      return;
    }
    return this.store.dispatch(FieldsActions.fetch());
  }
}
