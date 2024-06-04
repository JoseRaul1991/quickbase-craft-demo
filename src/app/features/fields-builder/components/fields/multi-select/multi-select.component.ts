import {
  Directive,
  HostListener,
  OnDestroy,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  toSignal,
  toObservable,
  takeUntilDestroyed,
} from '@angular/core/rxjs-interop';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, merge } from 'rxjs';
import {
  MAX_CHOICES,
  MAX_CHOICE_LENGTH,
} from '~app/features/fields-builder/constants/multiselect';
import { FieldTypeDefinition } from '~app/features/fields-builder/models/field-types';
import { OrderOptions } from '~app/features/fields-builder/models/order-options';
import { selectCreateLoading } from '~app/features/fields-builder/store/fields/selectors';
import { FormAction } from '~app/features/fields-builder/models/form-action';
import { maxChoicesIfDefaultValueProvided } from '~app/features/fields-builder/utils/multiselect';
import { FIELDS_BUILDER_ROUTE } from '~app/core/constants';
import { FieldsActions } from '~app/features/fields-builder/store/fields/actions';

@Directive()
export abstract class BaseMultiSelectComponent implements OnDestroy {
  protected formBuilder = inject(FormBuilder);
  protected store = inject(Store);

  abstract action: FormAction;

  readonly ORDER_OPTIONS_VALUES = Object.values(OrderOptions);
  readonly OrderOptions = OrderOptions;
  readonly FormAction = FormAction;
  readonly MAX_CHOICES = MAX_CHOICES;
  readonly MAX_CHOICE_LENGTH = MAX_CHOICE_LENGTH;
  readonly FIELDS_BUILDER_ROUTE = FIELDS_BUILDER_ROUTE;

  loading$ = this.store.select(selectCreateLoading);
  loadingSignal = toSignal(this.loading$);
  choices = signal<string[]>([]);
  choices$ = toObservable(this.choices);

  private validateDefaultValueMaxChoices = (): ValidatorFn => {
    return (control: AbstractControl<string>): ValidationErrors | null => {
      if (
        control.value &&
        this.choices().length >= this.MAX_CHOICES &&
        !this.choices().includes(control.value)
      ) {
        return { invalidChoice: true };
      }

      return null;
    };
  };

  multiselectFieldForm = this.formBuilder.group({
    label: ['', [Validators.required]],
    isRequired: false,
    type: FieldTypeDefinition.Multiselect,
    defaultValue: ['', [this.validateDefaultValueMaxChoices()]],
    order: [OrderOptions.AlphabeticalAZ],
  });

  formInvalidSignal = toSignal(
    this.multiselectFieldForm.valueChanges.pipe(
      map(() => this.multiselectFieldForm.invalid)
    )
  );

  disableSignal = computed(
    () => this.formInvalidSignal() || this.choices().length === 0
  );

  valueChanges = merge(
    this.choices$,
    this.multiselectFieldForm.valueChanges
  ).pipe(takeUntilDestroyed());

  get label() {
    return this.multiselectFieldForm.get('label');
  }

  get type() {
    return this.multiselectFieldForm.get('type');
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

  maxChoicesIfDefaultValueProvided = () =>
    maxChoicesIfDefaultValueProvided(
      this.defaultValue?.getRawValue(),
      this.choices()
    );

  @HostListener('keydown.enter', ['$event'])
  onEnter(event: KeyboardEvent): void {
    event.preventDefault();
  }

  ngOnDestroy(): void {
    this.store.dispatch(FieldsActions.cleanUpdate());
  }
}
