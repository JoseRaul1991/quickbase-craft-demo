import { Component } from '@angular/core';
import { zoomIn } from '~app/core/animations/zoom';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  standalone: true,
  styleUrls: ['./loading.component.scss'],
  animations: [zoomIn],
})
export class LoadingComponent {}
