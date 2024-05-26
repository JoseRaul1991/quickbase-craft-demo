import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { zoomIn } from '~app/core/animations';
import { BasePreviewComponent } from './base-preview.component';
import { selectUpdateSavedForm } from '~app/features/fields-builder/store/fields/selectors';

@Component({
  selector: 'app-preview-update',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  animations: [zoomIn],
})
export class PreviewUpdateComponent extends BasePreviewComponent {
  savedForm = toSignal(
    this.store.select(selectUpdateSavedForm).pipe(
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
