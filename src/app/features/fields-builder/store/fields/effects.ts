import { Injectable, inject } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { FieldsActions } from './actions';
import { BaseFieldsEffects } from '../effects';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FIELDS_BUILDER_ROUTE } from '~app/core/constants';
import { FieldsCreateEffects } from './create/effects';
import { FieldsDeleteEffects } from './delete/effects';
import { FieldsFetchEffects } from './fetch/effects';
import { FieldsUpdateEffects } from './update/effects';

@Injectable()
export class FieldsEffects extends BaseFieldsEffects {
  private router = inject(Router);
  private store = inject(Store);

  private createEffects = new FieldsCreateEffects();
  private updateEffects = new FieldsUpdateEffects();

  fetch$ = new FieldsFetchEffects().fetch$;
  create$ = this.createEffects.create$;
  update$ = this.updateEffects.update$;
  delete$ = new FieldsDeleteEffects().delete$;

  saveCreate$ = this.createEffects.saveCreate$;
  saveUpdate$ = this.updateEffects.saveUpdate$;

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
