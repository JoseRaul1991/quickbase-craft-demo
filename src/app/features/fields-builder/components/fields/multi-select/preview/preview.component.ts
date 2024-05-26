import { Component, Input, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { zoomIn } from '~app/core/animations';
import { selectCreateSavedForm } from '~app/features/fields-builder/store/fields/create/selectors';
import { FieldsStore } from '~app/features/fields-builder/store/reducer';
import { BasePreviewComponent } from './base-preview.component';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  animations: [zoomIn],
})
export class PreviewComponent extends BasePreviewComponent {
  savedForm = toSignal(
    this.store.select(selectCreateSavedForm).pipe(
      tap(savedForm => {
        if (!savedForm?.defaultValue) {
          this.selectedPreviewChoices = [];
          return;
        }

        this.selectedPreviewChoices = [savedForm.defaultValue];
      })
    )
  );
}
