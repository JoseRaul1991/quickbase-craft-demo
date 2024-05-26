import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-fields-builder',
  templateUrl: './fields-builder.component.html',
  styleUrls: ['./fields-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldsBuilderComponent {}
