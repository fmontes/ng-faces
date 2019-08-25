import { Component } from '@angular/core';
import { FacesDetectionService } from './services/faces-detection/faces-detection.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FacesRecognized, Face } from './services/faces-detection/faces-recognized.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedImage: File;
  faces: Face[];

  constructor(private faceDetectionService: FacesDetectionService) {}

  onImageSelected(image: File): void {
    this.selectedImage = image;

    this.faceDetectionService.recognize(image).subscribe(
      ({ faces }: FacesRecognized) => {
        this.faces = faces;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
