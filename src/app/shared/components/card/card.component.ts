import { ChangeDetectionStrategy, Component } from '@angular/core';
import { zoomIn } from '~app/core/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  styleUrls: ['./card.component.scss'],
  animations: [zoomIn],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
