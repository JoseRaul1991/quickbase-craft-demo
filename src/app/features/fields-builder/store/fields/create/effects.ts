import { createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { BaseFieldsEffects } from '../../effects';
import { FieldsActions } from '../actions';

export class FieldsCreateEffects extends BaseFieldsEffects {
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
}
