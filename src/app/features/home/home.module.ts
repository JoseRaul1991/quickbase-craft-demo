import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {
  PageHeaderComponent,
  PageBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CheckmarkComponent,
} from '~shared/components';
import {
  CoreRequirementsComponent,
  RequirementComponent,
  StretchRequirementsComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PageHeaderComponent,
    PageBodyComponent,
    CardComponent,
    CardHeaderComponent,
    CheckmarkComponent,
  ],
  declarations: [
    HomeComponent,
    CoreRequirementsComponent,
    RequirementComponent,
    StretchRequirementsComponent,
  ],
})
export class HomeModule {}
