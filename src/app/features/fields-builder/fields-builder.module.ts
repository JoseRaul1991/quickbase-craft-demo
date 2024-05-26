import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsBuilderComponent } from './fields-builder.component';
import { FieldsBuilderRoutingModule } from './fields-builder-routing.module';
import {
  PageHeaderComponent,
  PageBodyComponent,
  CardComponent,
  LoadingComponent,
  ErrorComponent,
  MultivalueComponent,
} from '~shared/components';
import { FieldsListComponent } from './pages/fields-list/fields-list.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FIELDS_FEATURE_KEY, reducer } from './store/reducer';
import { FieldCreateComponent } from './pages/field-create/field-create.component';
import { FieldEditComponent } from './pages/field-edit/field-edit.component';
import { ToYesOrNoPipe } from './pipes/to-yes-or-no.pipe';
import { EmptyListComponent } from './components/empty-list/empty-list.component';
import { RouterModule } from '@angular/router';
import { BackToListComponent } from './components/back-to-list/back-to-list.component';
import { FieldsEffects } from './store/fields/effects';
import { SelectedFieldEffects } from './store/selected/effects';
import { FieldTypesEffects } from './store/types/effects';
import { CreateMultiSelectComponent } from './components/fields/multi-select/multi-select-create.component';
import { FieldCreateCardComponent } from './components/field-create-card/field-create-card.component';
import { FieldCreateByTypeComponent } from './pages/field-create-by-type/field-create-by-type.component';
import { TypeNoSupportedComponent } from './components/type-no-supported/type-no-supported.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitButtonComponent } from '~app/shared/components/submit-button/submit-button.component';
import { PreviewComponent } from './components/fields/multi-select/preview/preview.component';
import { UpdateMultiSelectComponent } from './components/fields/multi-select/multi-select-update.component';

@NgModule({
  imports: [
    CommonModule,
    FieldsBuilderRoutingModule,
    PageHeaderComponent,
    PageBodyComponent,
    CardComponent,
    LoadingComponent,
    ErrorComponent,
    MultivalueComponent,
    RouterModule,
    StoreModule.forFeature(FIELDS_FEATURE_KEY, reducer),
    EffectsModule.forFeature([
      FieldsEffects,
      SelectedFieldEffects,
      FieldTypesEffects,
    ]),

    MultivalueComponent,
    SubmitButtonComponent,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FieldsBuilderComponent,
    FieldsListComponent,
    FieldCreateComponent,
    FieldEditComponent,
    ToYesOrNoPipe,
    EmptyListComponent,
    BackToListComponent,
    CreateMultiSelectComponent,
    UpdateMultiSelectComponent,
    FieldCreateCardComponent,
    FieldCreateByTypeComponent,
    TypeNoSupportedComponent,
    PreviewComponent,
  ],
})
export class FieldsBuilderModule {}
