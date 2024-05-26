import { Injectable, inject } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { FieldsActions } from './actions';
import { BaseFieldsEffects } from '../effects';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FIELDS_BUILDER_ROUTE } from '~app/core/constants';
import { FieldsCreateEffects } from './create/effects';
import { FieldsDeleteEffects } from './delete/effects';
import { FieldsFetchEffects } from './fetch/effects';

@Injectable()
export class FieldsEffects extends BaseFieldsEffects {
  private router = inject(Router);
  private store = inject(Store);

  private fieldsCreateEffects = new FieldsCreateEffects();

  fetch$ = new FieldsFetchEffects().fetch$;
  create$ = this.fieldsCreateEffects.create$;
  saveCreate$ = this.fieldsCreateEffects.saveCreate$;
  delete$ = new FieldsDeleteEffects().delete$;

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
