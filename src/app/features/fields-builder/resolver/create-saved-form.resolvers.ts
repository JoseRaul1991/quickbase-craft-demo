import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '~app/core/services';
import { FieldsActions } from '../store/fields/actions';
import { CREATE_FORM_MULTI_SELECT_SUFIX } from '../store/fields/create/effects';
import { FieldsStore } from '../store/reducer';

@Injectable({
  providedIn: 'root',
})
export class CreateSavedFormResolver {
  private store = inject(Store<FieldsStore>);
  private localStorageService = inject(LocalStorageService);

  resolve() {
    const savedField = this.localStorageService.getItem(
      CREATE_FORM_MULTI_SELECT_SUFIX
    );

    if (!savedField) {
      return;
    }

    return this.store.dispatch(
      FieldsActions.saveCreate({
        data: {
          ...savedField,
        },
      })
    );
  }
}
