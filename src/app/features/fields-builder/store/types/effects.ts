import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { FieldTypesActions } from './actions';
import { BaseFieldsEffects } from '../effects';

@Injectable()
export class FieldTypesEffects extends BaseFieldsEffects {
  fetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FieldTypesActions.fetch),
      exhaustMap(() => {
        return this.typesService.list().pipe(
          map(data =>
            FieldTypesActions.fetchSuccess({
              data,
            })
          ),
          catchError(error =>
            of(
              FieldTypesActions.fetchError({
                error,
              })
            )
          )
        );
      })
    )
  );
}
