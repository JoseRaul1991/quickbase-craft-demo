import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { FieldBuilderService } from '~app/features/fields-builder/services/field-builder.service';
import { FieldsActions } from './actions';

@Injectable()
export class FieldsEffects {
  private fieldsService = inject(FieldBuilderService);
  protected actions$ = inject(Actions);

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
