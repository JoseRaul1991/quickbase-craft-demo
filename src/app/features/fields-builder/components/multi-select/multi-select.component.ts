import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { OrderOptions, sortByOrderOptions } from '../../models/order-options';
import { zoomIn } from '~app/core/animations';
import { Store } from '@ngrx/store';
import { FieldsActions } from '../../store/fields/actions';
import { FieldTypeDefinition } from '../../models/field-types';
import { selectCreateLoading } from '../../store/fields/selectors';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  animations: [zoomIn],
})
export class MultiSelectComponent {
  private formBuilder = inject(FormBuilder);
  private store = inject(Store);

  readonly ORDER_OPTIONS_VALUES = Object.values(OrderOptions);
  readonly OrderOptions = OrderOptions;
  readonly sortByOrderOptions = sortByOrderOptions;
  readonly MAX_CHOICES = 50;
  readonly MAX_CHOICE_LENGTH = 40;

  loading$ = this.store.select(selectCreateLoading);

  choices = signal<string[]>([]);
  selectedPreviewChoices: string[] = [];

  private validateDefaultValueMaxChoices = (): ValidatorFn => {
    return (control: AbstractControl<string>): ValidationErrors | null => {
      if (
        control.value &&
        this.choices().length >= this.MAX_CHOICES &&
        !this.choices().includes(control.value)
      ) {
        this.selectedPreviewChoices = [];
        return { invalidChoice: true };
      }

      this.selectedPreviewChoices = control.value ? [control.value] : [];

      return null;
    };
  };

  multiselectFieldForm = this.formBuilder.group({
    label: ['', [Validators.required]],
    isRequired: false,
    defaultValue: ['', [this.validateDefaultValueMaxChoices()]],
    order: [OrderOptions.AlphabeticalAZ],
  });

  get label() {
    return this.multiselectFieldForm.get('label');
  }

  get order() {
    return this.multiselectFieldForm.get('order');
  }

  get isRequired() {
    return this.multiselectFieldForm.get('isRequired');
  }

  get defaultValue() {
    return this.multiselectFieldForm.get('defaultValue');
  }

  calcMaxChoices() {
    const currentDefaultValue = this.defaultValue?.getRawValue();
    const isDefaultValueInChoices =
      currentDefaultValue && this.choices().includes(currentDefaultValue);
    if (!isDefaultValueInChoices && currentDefaultValue) {
      return this.MAX_CHOICES - 1;
    }

    return this.MAX_CHOICES;
  }

  resetForm() {
    this.multiselectFieldForm.reset({
      label: '',
      isRequired: false,
      defaultValue: '',
      order: OrderOptions.AlphabeticalAZ,
    });
    this.choices.update(() => []);
  }

  submitForm() {
    if (!this.multiselectFieldForm.valid) {
      return;
    }

    const defaultValue = this.defaultValue?.getRawValue();
    if (defaultValue && !this.choices().includes(defaultValue)) {
      this.choices.update(choices => [...choices, defaultValue]);
    }

    this.store.dispatch(
      FieldsActions.create({
        data: {
          label: this.label?.getRawValue(),
          required: this.isRequired?.getRawValue(),
          order: this.order?.getRawValue(),
          default: this.defaultValue?.getRawValue(),
          type: FieldTypeDefinition.Multiselect,
          choices: this.choices(),
        },
      })
    );
  }
}

// Alphabet
// A1, B2, C3, D4, E5, F6, G7, H8, I9, J10, K11, L12, M13, N14, O15, P16, Q17, R18, S19, T20, U21, V22, W23, X24, Y25, Z26
// A11, B12, C13, D14, E15, F16, G17, H18, I19, J20, K21, L22, M23, N24, O25, P26, Q1, R2, S3, T4, U5, V6, W7, X8, Y9, Z10
