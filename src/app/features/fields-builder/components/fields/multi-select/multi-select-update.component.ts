import { Component, Input, OnInit, inject } from '@angular/core';
import { zoomIn } from '~app/core/animations';
import { FieldsActions } from '../../../store/fields/actions';
import { BaseMultiSelectComponent } from './multi-select.component';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { selectUpdateSavedForm } from '~app/features/fields-builder/store/fields/selectors';
import { Field } from '~app/features/fields-builder/models/field';
import { FormAction } from '~app/features/fields-builder/models/form-action';

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
  @Input({ required: true }) id!: string;
  private activatedRoute = inject(ActivatedRoute);

  readonly action = FormAction.Update;

  fieldChange = this.activatedRoute.data.pipe(
    takeUntilDestroyed(),
    map(data => data['field'] as Field)
  );
  field = toSignal(this.fieldChange);

  readonly title = 'Update Multi-Select Field';
  readonly description =
    'Please fill all required fields to be able to edit this element.';

  savedForm$ = this.store.select(selectUpdateSavedForm);
  savedForm = toSignal(this.savedForm$);

  ngOnInit(): void {
    this.setSavedForm();
    this.dispatchSaveOnValueChanges();
    this.routeFieldChange();
  }

  private setSavedForm() {
    const savedForm = this.savedForm();
    if (savedForm) {
      this.multiselectFieldForm.patchValue(savedForm);
      this.choices.update(() => savedForm.choices ?? []);
    } else {
      this.resetForm();
    }
  }

  private routeFieldChange() {
    this.fieldChange.subscribe(() => {
      this.resetForm();
    });
  }

  private dispatchSaveOnValueChanges() {
    this.valueChanges.subscribe(() => {
      this.store.dispatch(
        FieldsActions.saveUpdate({
          data: {
            id: this.id,
            ...this.multiselectFieldForm.getRawValue(),
            choices: this.choices(),
          },
        })
      );
    });
  }

  resetForm() {
    this.choices.update(() => [...(this.field()?.choices || [])]);
    this.multiselectFieldForm.reset({
      ...this.field(),
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
      FieldsActions.update({
        data: {
          id: this.id,
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
