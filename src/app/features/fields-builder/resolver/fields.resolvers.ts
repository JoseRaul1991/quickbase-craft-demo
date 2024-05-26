import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FieldsStore } from '../store/reducer';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FieldsActions } from '../store/fields/actions';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectFields } from '../store/fields/selectors';

@Injectable({
  providedIn: 'root',
})
export class FieldsResolver {
  private store = inject(Store<FieldsStore>);
  private fields = toSignal(this.store.select(selectFields));

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.fields()) {
      return;
    }
    return this.store.dispatch(FieldsActions.fetch());
  }
}
