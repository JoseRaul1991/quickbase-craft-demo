import { ChangeDetectionStrategy, Component } from '@angular/core';
import { zoomIn } from '~core/animations';

@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.scss'],
  animations: [zoomIn],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page404Component {}
