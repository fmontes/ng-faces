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

  face: Face = {
    attributes: {
      emotion: {
        sadness: 2.604,
        neutral: 0.004,
        disgust: 0.355,
        anger: 0.001,
        surprise: 0.004,
        fear: 0.001,
        happiness: 97.032
      },
      gender: {
        value: 'Male'
      },
      age: {
        value: 46
      },
      headpose: {
        yaw_angle: 0.078250915,
        pitch_angle: -1.0360398,
        roll_angle: 5.20722
      },
      smile: {
        threshold: 50,
        value: 100
      }
    },
    face_rectangle: {
      width: 254,
      top: 200,
      left: 505,
      height: 254
    },
    face_token: '545a71f72056fee426e7e669a5a35ce9'
  };

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
