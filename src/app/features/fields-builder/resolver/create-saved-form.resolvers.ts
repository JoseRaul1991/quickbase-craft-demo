import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FieldsStore } from '../store/reducer';
import { FieldsActions } from '../store/fields/actions';
import { LocalStorageService } from '~app/core/services/local-storage.service';
import { CREATE_FORM_MULTI_SELECT_SUFIX } from '../store/fields/create/effects';

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
