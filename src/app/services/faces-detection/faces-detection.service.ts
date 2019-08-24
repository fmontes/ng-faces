import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacesRecognized } from './faces-recognized.model';

const URL = 'https://api-us.faceplusplus.com/facepp/v3/detect';
const API_KEY = 'q-1MbFGenbKTd2dnb-uTG7kJNta7eaz2';
const API_SECRET = 'G493itfSSnkfyV9sM9vQiNEa0mToK8mQ';

@Injectable({
  providedIn: 'root'
})
export class FacesDetectionService {
  constructor(private http: HttpClient) {}

  recognize(file: File): Observable<FacesRecognized> {
    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('return_attributes', 'gender,age,smiling,emotion,headpose');
    // formData.append('return_landmark', '1');

    return this.http.post<FacesRecognized>(URL, formData, {
      params: { api_key: API_KEY, api_secret: API_SECRET }
    });
  }
}
