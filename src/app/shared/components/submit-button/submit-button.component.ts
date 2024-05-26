import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  Signal,
  signal,
} from '@angular/core';
import { LoadingComponent } from '~shared/components';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
  imports: [CommonModule, LoadingComponent, AsyncPipe],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitButtonComponent {
  @Input() disabled: Signal<boolean | null> = signal(false);
  @Input() loading: Signal<boolean | undefined> = signal(false);

  @Output() onClick = new EventEmitter<void>();
}
