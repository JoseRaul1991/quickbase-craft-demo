import { Directive, Signal, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Field, FieldCreate } from '~app/features/fields-builder/models/field';
import {
  OrderOptions,
  sortByOrderOptions,
} from '~app/features/fields-builder/models/order-options';
import { FieldsStore } from '~app/features/fields-builder/store/reducer';
import { Nullable } from '~app/core/types/nullable';

Directive();
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
