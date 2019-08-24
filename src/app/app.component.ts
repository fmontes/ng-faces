import { Component } from '@angular/core';
import { FacesDetectionService } from './services/faces-detection/faces-detection.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FacesRecognized } from './services/faces-detection/faces-recognized.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedImage: File;

  constructor(private faceDetectionService: FacesDetectionService) {}

  onImageSelected(image: File): void {
    this.selectedImage = image;

    this.faceDetectionService.recognize(image).subscribe(
      (facesRecognized: FacesRecognized) => {
        console.log(facesRecognized);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
