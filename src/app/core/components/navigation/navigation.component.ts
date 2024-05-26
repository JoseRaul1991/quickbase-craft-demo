import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NAVIGATION } from '~core/constants';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  readonly navigation = NAVIGATION;
}
