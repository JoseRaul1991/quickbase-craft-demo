import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Requirement } from '../../models/requirement';
import { zoomIn } from '~app/core/animations';

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
