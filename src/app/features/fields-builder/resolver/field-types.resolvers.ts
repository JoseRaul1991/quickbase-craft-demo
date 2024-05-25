import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FieldsStore } from '../store/reducer';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FieldTypesActions } from '../store/types/actions';

@Injectable({
  providedIn: 'root',
})
export class FieldTypesResolver {
  private store = inject(Store<FieldsStore>);

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.dispatch(FieldTypesActions.fetch());
  }
}
