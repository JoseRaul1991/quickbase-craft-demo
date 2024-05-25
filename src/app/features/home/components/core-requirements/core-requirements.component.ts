import { Component } from '@angular/core';
import { Requirement } from '../../models/requirement';
import { CORE_REQUIREMENTS } from '../../constants/core-requirements';

@Component({
  selector: 'app-core-requirements',
  templateUrl: './core-requirements.component.html',
  styleUrls: ['./core-requirements.component.scss'],
})
export class CoreRequirementsComponent {
  readonly coreRequirements = CORE_REQUIREMENTS;
}
