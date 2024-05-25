import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldsBuilderComponent } from './fields-builder.component';
import { PAGE_TITLE_PREFIX } from '~app/core/constants';
import { FieldsListComponent } from './pages/fields-list/fields-list.component';
import { FieldEditComponent } from './pages/field-edit/field-edit.component';
import { FieldCreateComponent } from './pages/field-create/field-create.component';
import { FieldsResolver } from './resolver/fields.resolvers';
import { FieldTypesResolver } from './resolver/field-types.resolvers';

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
        path: 'update/:id',
        component: FieldEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldsBuilderRoutingModule {}