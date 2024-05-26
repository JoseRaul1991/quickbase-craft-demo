import { Component, OnInit } from '@angular/core';
import { OrderOptions } from '../../../models/order-options';
import { zoomIn } from '~app/core/animations';
import { FieldsActions } from '../../../store/fields/actions';
import { FieldTypeDefinition } from '../../../models/field-types';
import { BaseMultiSelectComponent } from './multi-select.component';

@Component({
  selector: 'app-update-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['../fields.scss', './multi-select.component.scss'],
  animations: [zoomIn],
})
export class UpdateMultiSelectComponent
  extends BaseMultiSelectComponent
  implements OnInit
{
  readonly title = 'Update Multi-Select Field';
  readonly description =
    'Please fill all required fields to be able to edit this element.';

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
