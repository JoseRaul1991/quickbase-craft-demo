import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FieldsStore } from '../store/reducer';
import { FieldTypesActions } from '../store/types/actions';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectFieldTypes } from '../store/types/selectors';

@Injectable({
  providedIn: 'root',
})
export class FieldTypesResolver {
  private store = inject(Store<FieldsStore>);
  private types = toSignal(this.store.select(selectFieldTypes));

  resolve() {
    if (this.types()) {
      return;
    }

    return this.store.dispatch(FieldTypesActions.fetch());
  }
}
