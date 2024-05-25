import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  standalone: true,
  imports: [CommonModule, CardComponent],
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input({ required: true }) error: any;
}
