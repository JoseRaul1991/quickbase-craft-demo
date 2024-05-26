import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  standalone: true,
  styleUrls: ['./page-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageBodyComponent {}
