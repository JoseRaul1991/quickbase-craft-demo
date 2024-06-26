import { createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';
import { BaseFieldsEffects } from '../../effects';
import { FieldsActions } from '../actions';
import { inject } from '@angular/core';
import { LocalStorageService } from '~core/services';

export const UPDATE_FORM_MULTI_SELECT_SUFIX = 'UPDATE_FORM_MULTI_SELECT_FIELD';

export class FieldsUpdateEffects extends BaseFieldsEffects {
  private localStorageService = inject(LocalStorageService);

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FieldsActions.update),
      exhaustMap(({ data }) => {
        return this.fieldsService.put(data).pipe(
          map(() => {
            this.localStorageService.removeItem(
              `${UPDATE_FORM_MULTI_SELECT_SUFIX}_${data.type}_${data.id}`
            );
            return FieldsActions.updateSuccess();
          }),
          catchError(error =>
            of(
              FieldsActions.updateError({
                error,
              })
            )
          )
        );
      })
    )
  );

  saveUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FieldsActions.saveUpdate),
        tap(({ data }) => {
          this.localStorageService.setItem(
            `${UPDATE_FORM_MULTI_SELECT_SUFIX}_${data.type}_${data.id}`,
            data
          );
        })
      ),
    { dispatch: false }
  );
}
