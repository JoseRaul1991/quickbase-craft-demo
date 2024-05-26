import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { tap, concat } from 'rxjs';
import { zoomIn } from '~app/core/animations';
import {
  OrderOptions,
  sortByOrderOptions,
} from '~app/features/fields-builder/models/order-options';
import { selectCreateSavedForm } from '~app/features/fields-builder/store/fields/create/selectors';
import { FieldsStore } from '~app/features/fields-builder/store/reducer';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  animations: [zoomIn],
})
export class PreviewComponent {
  private store = inject(Store<FieldsStore>);

  readonly sortByOrderOptions = sortByOrderOptions;
  readonly OrderOptions = OrderOptions;

  selectedPreviewChoices: string[] = [];
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

  choices = computed(() => {
    const savedFormValue = this.savedForm();
    const defaultValue = savedFormValue?.defaultValue;
    let currentChoices = [...(savedFormValue?.choices ?? [])];
    const order = savedFormValue?.order ?? OrderOptions.AlphabeticalAZ;

    if (defaultValue && !currentChoices.includes(defaultValue)) {
      currentChoices = [...currentChoices, defaultValue];
    }

    return currentChoices?.sort(sortByOrderOptions(order));
  });
}
