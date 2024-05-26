import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STRETCH_REQUIREMENTS } from '../../constants/stretch-requirements';

@Component({
  selector: 'app-stretch-requirements',
  templateUrl: './stretch-requirements.component.html',
  styleUrls: ['./stretch-requirements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StretchRequirementsComponent {
  readonly requirements = STRETCH_REQUIREMENTS;
}
