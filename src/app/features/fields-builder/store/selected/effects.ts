import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { SelectedFieldActions } from './actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { BaseFieldsEffects } from '../effects';

@Injectable()
export class SelectedFieldEffects extends BaseFieldsEffects {
  fetchField$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SelectedFieldActions.fetch),
      exhaustMap(({ id }) => {
        return this.fieldsService.get(id).pipe(
          map(data =>
            SelectedFieldActions.fetchSuccess({
              data,
            })
          ),
          catchError(error =>
            of(
              SelectedFieldActions.fetchError({
                error,
              })
            )
          )
        );
      })
    )
  );
}
