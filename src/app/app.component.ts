import { Component } from '@angular/core';
import { FacesDetectionService } from './services/faces-detection/faces-detection.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FacesRecognized, Face } from './services/faces-detection/faces-recognized.model';
import { flatMap, map, toArray, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

const updateFaceRectangle = (face: Face, ratio: number): Face => {
  const { width, height, left, top } = face.face_rectangle;

  return {
    ...face,
    face_rectangle: {
      width: width * ratio,
      height: height * ratio,
      left: left * ratio,
      top: top * ratio
    }
  };
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedImage: File;
  faces$: Observable<Face[]>;

  constructor(private faceDetectionService: FacesDetectionService) {}

  onImageLoad(event: Event): void {
    const image = event.target as HTMLImageElement;
    const ratio = image.getBoundingClientRect().width / image.naturalWidth;

    this.faces$ = this.faceDetectionService.recognize(this.selectedImage).pipe(
      flatMap((facesRecognized: FacesRecognized) => facesRecognized.faces),
      map((face: Face) => updateFaceRectangle(face, ratio)),
      toArray(),
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        return [];
      })
    );
  }
}
