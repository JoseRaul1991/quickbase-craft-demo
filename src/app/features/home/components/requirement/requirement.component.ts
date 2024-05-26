import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { zoomIn } from '~core/animations';
import { Requirement } from '../../models';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.scss'],
  animations: [zoomIn],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequirementComponent {
  @Input({ required: true }) requirement!: Requirement;

  toggleCheck(event: MouseEvent | KeyboardEvent): void {
    event.stopPropagation();
    this.requirement.checked = !this.requirement.checked;
  }
}
