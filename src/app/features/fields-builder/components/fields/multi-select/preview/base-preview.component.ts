import { Directive, inject, Signal, computed } from '@angular/core';
import { Store } from '@ngrx/store';
import { Nullable } from '~app/core/types';
import {
  sortByOrderOptions,
  OrderOptions,
  Field,
  FieldCreate,
} from '~app/features/fields-builder/models';
import { FieldsStore } from '~app/features/fields-builder/store/reducer';

@Directive()
export abstract class BasePreviewComponent {
  protected store = inject(Store<FieldsStore>);

  readonly sortByOrderOptions = sortByOrderOptions;
  readonly OrderOptions = OrderOptions;

  selectedPreviewChoices: string[] = [];
  abstract savedForm: Signal<
    Nullable<Field> | Nullable<FieldCreate> | undefined
  >;

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
