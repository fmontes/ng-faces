import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedImage: File;

  onImageSelected(image: File): void {
    this.selectedImage = image;
  }
}
