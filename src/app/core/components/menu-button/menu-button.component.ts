import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { zoomIn } from '~app/core/animations/zoom';
import { MenuService } from '~app/core/services/menu.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
  animations: [zoomIn],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuButtonComponent {
  private menuService = inject(MenuService);

  readonly isOpen = this.menuService.isOpen;

  toggleMenu() {
    this.menuService.isOpen.set(!this.isOpen());
  }
}
