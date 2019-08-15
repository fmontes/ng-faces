import { Component, Output, EventEmitter } from '@angular/core';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-image-file-form',
  templateUrl: './image-file-form.component.html',
  styleUrls: ['./image-file-form.component.scss']
})
export class ImageFileFormComponent {
  @Output() selected: EventEmitter<File> = new EventEmitter();

  constructor() {}

  onFileSelect(event: HTMLInputEvent): void {
    this.selected.emit(event.target.files[0]);
  }
}
