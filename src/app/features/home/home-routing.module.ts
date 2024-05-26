import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PAGE_TITLE_PREFIX } from '~core/constants';

const routes: Routes = [
  {
    path: '',
    title: `${PAGE_TITLE_PREFIX} Home`,
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
