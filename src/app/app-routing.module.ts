import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGE_TITLE_PREFIX } from './core/constants';
import { Page404Component } from './core/pages/404/404.component';

const routes: Routes = [
  {
    path: '',
    title: `${PAGE_TITLE_PREFIX} CraftDemo`,
    children: [
      {
        path: 'fields-builder',
        loadChildren: () =>
          import('~features/fields-builder/fields-builder.module').then(
            m => m.FieldsBuilderModule
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('~features/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'not-found',
        component: Page404Component,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'not-found',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
