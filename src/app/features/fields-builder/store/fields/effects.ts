import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { FieldBuilderService } from '~app/features/fields-builder/services/field-builder.service';
import { FieldsActions } from './actions';
import { BaseFieldsEffects } from '../effects';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FIELDS_BUILDER_ROUTE } from '~app/core/constants';

@Injectable()
export class FieldsEffects extends BaseFieldsEffects {
  private router = inject(Router);
  private store = inject(Store);

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

  refreshList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          FieldsActions.createSuccess,
          FieldsActions.removeSucess,
          FieldsActions.updateSuccess
        ),
        tap(() => {
          this.router.navigate([FIELDS_BUILDER_ROUTE]);
          this.store.dispatch(FieldsActions.fetch());
        })
      ),
    { dispatch: false }
  );
}
