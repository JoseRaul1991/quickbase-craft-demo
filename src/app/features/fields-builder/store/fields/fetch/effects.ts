import { createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { BaseFieldsEffects } from '../../effects';
import { FieldsActions } from '../actions';

export class FieldsFetchEffects extends BaseFieldsEffects {
  fetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FieldsActions.fetch),
      exhaustMap(() => {
        return this.fieldsService.list().pipe(
          map(data =>
            FieldsActions.fetchSuccess({
              data,
            })
          ),
          catchError(error =>
            of(
              FieldsActions.fetchError({
                error,
              })
            )
          )
        );
      })
    )
  );
}
