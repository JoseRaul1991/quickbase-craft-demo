import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FieldType } from '../../models/field-types';
import { zoomIn } from '~app/core/animations';

@Component({
  selector: 'app-field-create-card',
  templateUrl: './field-create-card.component.html',
  styleUrls: ['./field-create-card.component.scss'],
  animations: [zoomIn],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldCreateCardComponent {
  @Input({ required: true }) type!: FieldType;
}
