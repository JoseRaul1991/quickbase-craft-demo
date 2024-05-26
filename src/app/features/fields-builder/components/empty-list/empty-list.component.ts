import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FIELDS_BUILDER_ROUTE } from '~app/core/constants';

@Component({
  selector: 'app-empty-list',
  templateUrl: './empty-list.component.html',
  styleUrls: ['./empty-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyListComponent {
  readonly FIELDS_BUILDER_ROUTE = FIELDS_BUILDER_ROUTE;
}
