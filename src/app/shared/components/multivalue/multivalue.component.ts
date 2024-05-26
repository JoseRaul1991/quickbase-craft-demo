import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { zoomIn, zoomOut } from '~app/core/animations';
import { MaxLengthPipe } from '~app/shared/pipes/max-length.pipe';

@Component({
  selector: 'app-multivalue',
  templateUrl: './multivalue.component.html',
  standalone: true,
  imports: [CommonModule, MaxLengthPipe],
  animations: [zoomIn, zoomOut],
  styleUrls: ['./multivalue.component.scss'],
})
export class MultivalueComponent {
  @ViewChild('typeDiv', { static: true }) typeDiv!: ElementRef<HTMLDivElement>;
  @Input({ required: true }) elements!: WritableSignal<string[]>;
  @Input() placeholder = 'Type here...';
  @Input() removable = true;
  @Input() maxLength: number = 20;
  @Input() maxElements: number = 10;
  @Input() defaultValue?: string;

  @Output() markAsDefault = new EventEmitter<string>();

  currentText = signal('');
  maxLengthError = computed(() =>
    this.currentText()
      .split(',')
      .some(e => e.length > this.maxLength)
  );
  maxElementsError = computed(() => this.elements().length >= this.maxElements);

  removeElement(index: number) {
    this.elements.update(elements => elements.filter((_, i) => i !== index));
  }

  focusInput() {
    this.typeDiv?.nativeElement.focus();
  }

  onInput(event: Event) {
    const element = event.target as HTMLDivElement;
    this.currentText.set(`${element?.innerText}`);
    this.onTextChange();
    event.preventDefault();
  }

  onKeyDownEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addElement();
      event.preventDefault();
    }
  }

  private onTextChange() {
    if (this.currentText().length > this.maxLength) {
      const newElements = this.currentText().split(',');
      this.typeDiv.nativeElement.innerHTML = `${newElements.map(e => this.markInRedExtraText(e)).join(',')}`;
    } else {
      this.typeDiv.nativeElement.innerHTML = `${this.currentText()}`;
    }
    this.setCursorToEnd();
  }

  private markInRedExtraText(value: string) {
    const validText = value.slice(0, this.maxLength);
    const extraText = value.slice(this.maxLength, value.length);
    return `${validText}<span class="text-red-600">${extraText}</span>`;
  }

  private addElement() {
    if (
      this.maxElementsError() ||
      this.maxLengthError() ||
      !this.currentText()
    ) {
      return;
    }

    const value = this.currentText();

    if (this.elements().includes(value)) {
      return;
    }
    if (value) {
      const setOfElements = new Set([
        ...this.elements(),
        ...value.split(',').map(e => e.trim()),
      ]);
      const currentElements = [...setOfElements];
      if (currentElements.length > this.maxElements) {
        currentElements.splice(
          this.maxElements,
          currentElements.length - this.maxElements
        );
      }
      this.elements.set(currentElements);
      this.clearInput();
    }
  }

  private clearInput() {
    if (this.typeDiv) {
      this.typeDiv.nativeElement.innerHTML = '';
      this.currentText.set('');
    }
  }

  private setCursorToEnd() {
    const range = document.createRange();
    range.selectNodeContents(this.typeDiv.nativeElement);
    range.collapse();
    const sel = document.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
  }
}
