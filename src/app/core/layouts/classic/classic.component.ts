import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { expandCollapse } from '~core/animations';
import { MenuService } from '~core/services';

@Component({
  selector: 'app-classic-layout',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss'],
  animations: [expandCollapse],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassicLayoutComponent {
  private menuService = inject(MenuService);

  readonly isOpen = this.menuService.isOpen;
}
