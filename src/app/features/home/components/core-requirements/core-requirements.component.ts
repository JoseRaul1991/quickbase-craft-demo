import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CORE_REQUIREMENTS } from '../../constants/core-requirements';

@Component({
  selector: 'app-core-requirements',
  templateUrl: './core-requirements.component.html',
  styleUrls: ['./core-requirements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreRequirementsComponent {
  readonly coreRequirements = CORE_REQUIREMENTS;
}
