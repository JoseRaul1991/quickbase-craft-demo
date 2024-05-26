import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  PageHeaderComponent,
  PageBodyComponent,
  CardComponent,
  LoadingComponent,
  ErrorComponent,
  MultivalueComponent,
  SubmitButtonComponent,
} from '~shared/components';
import {
  EmptyListComponent,
  BackToListComponent,
  CreateMultiSelectComponent,
  UpdateMultiSelectComponent,
  FieldCreateCardComponent,
  TypeNoSupportedComponent,
  PreviewComponent,
  PreviewUpdateComponent,
} from './components';
import { FieldsBuilderRoutingModule } from './fields-builder-routing.module';
import { FieldsBuilderComponent } from './fields-builder.component';
import {
  FieldsListComponent,
  FieldCreateComponent,
  FieldEditComponent,
  FieldCreateByTypeComponent,
} from './pages';
import { ToYesOrNoPipe } from './pipes';
import { FieldsEffects } from './store/fields/effects';
import { FIELDS_FEATURE_KEY, reducer } from './store/reducer';
import { FieldTypesEffects } from './store/types/effects';

@NgModule({
  imports: [
    CommonModule,
    FieldsBuilderRoutingModule,
    RouterModule,
    StoreModule.forFeature(FIELDS_FEATURE_KEY, reducer),
    EffectsModule.forFeature([FieldsEffects, FieldTypesEffects]),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,

    // Shared Components
    PageHeaderComponent,
    PageBodyComponent,
    CardComponent,
    LoadingComponent,
    ErrorComponent,
    MultivalueComponent,
    MultivalueComponent,
    SubmitButtonComponent,
  ],
  declarations: [
    // Components
    FieldsBuilderComponent,
    FieldsListComponent,
    FieldCreateComponent,
    FieldEditComponent,
    EmptyListComponent,
    BackToListComponent,
    CreateMultiSelectComponent,
    UpdateMultiSelectComponent,
    FieldCreateCardComponent,
    FieldCreateByTypeComponent,
    TypeNoSupportedComponent,
    PreviewComponent,
    PreviewUpdateComponent,

    // Pipes
    ToYesOrNoPipe,
  ],
})
export class FieldsBuilderModule {}
