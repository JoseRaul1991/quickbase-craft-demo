import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { zoomIn } from '~app/core/animations/zoom';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./loading.component.scss'],
  animations: [zoomIn],
})
export class LoadingComponent {
  @Input() mini = false;
}
