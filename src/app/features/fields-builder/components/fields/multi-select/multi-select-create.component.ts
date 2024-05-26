import { Component, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { zoomIn } from '~app/core/animations';
import {
  FormAction,
  OrderOptions,
  FieldTypeDefinition,
} from '~app/features/fields-builder/models';
import { FieldsActions } from '~app/features/fields-builder/store/fields/actions';
import { selectCreateSavedForm } from '~app/features/fields-builder/store/fields/selectors';
import { BaseMultiSelectComponent } from './multi-select.component';

@Component({
  selector: 'app-create-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['../fields.scss', './multi-select.component.scss'],
  animations: [zoomIn],
})
export class CreateMultiSelectComponent
  extends BaseMultiSelectComponent
  implements OnInit
{
  readonly title = 'Create a Multi Select';
  readonly description =
    'Please fill all required fields to create this element.';

  savedForm$ = this.store.select(selectCreateSavedForm);
  savedForm = toSignal(this.savedForm$);

  readonly action = FormAction.Create;

  ngOnInit(): void {
    this.setSavedForm();
    this.dispatchSaveOnValueChanges();
  }

  private setSavedForm() {
    const savedForm = this.savedForm();
    if (savedForm) {
      this.multiselectFieldForm.patchValue(savedForm);
      this.choices.update(() => savedForm.choices ?? []);
    }
  }

  private dispatchSaveOnValueChanges() {
    this.valueChanges.subscribe(() => {
      this.store.dispatch(
        FieldsActions.saveCreate({
          data: {
            ...this.multiselectFieldForm.getRawValue(),
            choices: this.choices(),
          },
        })
      );
    });
  }

  resetForm() {
    this.choices.update(() => []);
    this.multiselectFieldForm.reset({
      label: '',
      isRequired: false,
      defaultValue: '',
      order: OrderOptions.AlphabeticalAZ,
      type: FieldTypeDefinition.Multiselect,
    });
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
          isRequired: this.isRequired?.getRawValue(),
          order: this.order?.getRawValue(),
          defaultValue: this.defaultValue?.getRawValue(),
          type: this.type?.getRawValue(),
          choices: [...this.choices()],
        },
      })
    );
  }
}
