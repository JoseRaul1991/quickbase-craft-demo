import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PAGE_TITLE_PREFIX } from '~core/constants';
import { FieldsBuilderComponent } from './fields-builder.component';
import {
  FieldTypesResolver,
  FieldsResolver,
  CreateSavedFormResolver,
  UpdateSavedFormResolver,
  FieldResolver,
} from './resolver';
import {
  FieldsListComponent,
  FieldCreateComponent,
  FieldCreateByTypeComponent,
  FieldEditComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    title: `${PAGE_TITLE_PREFIX} Fields Builder`,
    component: FieldsBuilderComponent,
    resolve: {
      types: FieldTypesResolver,
    },
    children: [
      {
        path: '',
        component: FieldsListComponent,
        resolve: {
          fields: FieldsResolver,
        },
      },
      {
        path: 'create',
        component: FieldCreateComponent,
      },
      {
        path: 'create/:type',
        resolve: {
          savedForm: CreateSavedFormResolver,
        },
        component: FieldCreateByTypeComponent,
      },
      {
        path: 'update/:type/:id',
        component: FieldEditComponent,
        resolve: {
          savedForm: UpdateSavedFormResolver,
          field: FieldResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldsBuilderRoutingModule {}
