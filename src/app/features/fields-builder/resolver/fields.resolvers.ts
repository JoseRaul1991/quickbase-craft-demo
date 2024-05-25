import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FieldsStore } from '../store/reducer';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FieldsActions } from '../store/fields/actions';

@Injectable({
  providedIn: 'root',
})
export class FieldsResolver {
  private store = inject(Store<FieldsStore>);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.dispatch(FieldsActions.fetch());
  }
}
