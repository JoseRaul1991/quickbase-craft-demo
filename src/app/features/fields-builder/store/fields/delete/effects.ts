import { createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of } from 'rxjs';
import { BaseFieldsEffects } from '../../effects';
import { FieldsActions } from '../actions';

export class FieldsDeleteEffects extends BaseFieldsEffects {
  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FieldsActions.remove),
      exhaustMap(({ id }) => {
        return this.fieldsService.delete(id).pipe(
          map(() => FieldsActions.removeSucess()),
          catchError(error =>
            of(
              FieldsActions.removeError({
                error,
              })
            )
          )
        );
      })
    )
  );
}
