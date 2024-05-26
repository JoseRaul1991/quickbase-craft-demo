import { createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';
import { BaseFieldsEffects } from '../../effects';
import { FieldsActions } from '../actions';
import { inject } from '@angular/core';
import { LocalStorageService } from '~app/core/services/local-storage.service';

export const CREATE_FORM_MULTI_SELECT_SUFIX = 'CREATE_FORM_MULTI_SELECT_FIELD';
export class FieldsCreateEffects extends BaseFieldsEffects {
  private localStorageService = inject(LocalStorageService);

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FieldsActions.create),
      exhaustMap(({ data }) => {
        return this.fieldsService.post(data).pipe(
          map(() => FieldsActions.createSuccess()),
          catchError(error =>
            of(
              FieldsActions.createError({
                error,
              })
            )
          )
        );
      })
    )
  );

  saveCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FieldsActions.saveCreate),
        tap(({ data }) => {
          this.localStorageService.setItem(
            CREATE_FORM_MULTI_SELECT_SUFIX,
            data
          );
        })
      ),
    { dispatch: false }
  );
}
