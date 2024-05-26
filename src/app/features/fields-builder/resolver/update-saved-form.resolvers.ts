import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '~core/services';
import { FieldsActions } from '../store/fields/actions';
import { UPDATE_FORM_MULTI_SELECT_SUFIX } from '../store/fields/update/effects';
import { FieldsStore } from '../store/reducer';

@Injectable({
  providedIn: 'root',
})
export class UpdateSavedFormResolver {
  private store = inject(Store<FieldsStore>);
  private localStorageService = inject(LocalStorageService);

  resolve(route: ActivatedRouteSnapshot) {
    const { type, id } = route.params;
    const savedField = this.localStorageService.getItem(
      `${UPDATE_FORM_MULTI_SELECT_SUFIX}_${type}_${id}`
    );

    if (!savedField) {
      return;
    }

    return this.store.dispatch(
      FieldsActions.saveUpdate({
        data: {
          ...savedField,
        },
      })
    );
  }
}
