import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-to',
  templateUrl: './back-to-list.component.html',
  styleUrls: ['./back-to-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackToListComponent {
  @Input() path?: string;
}
