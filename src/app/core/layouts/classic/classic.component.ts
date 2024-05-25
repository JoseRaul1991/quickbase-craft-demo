import { Component, inject } from '@angular/core';
import { expandCollapse } from '~app/core/animations/expand-collapse';
import { MenuService } from '~app/core/services/menu.service';

@Component({
  selector: 'app-classic-layout',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss'],
  animations: [expandCollapse],
})
export class ClassicLayoutComponent {
  private menuService = inject(MenuService);

  readonly isOpen = this.menuService.isOpen;
}
