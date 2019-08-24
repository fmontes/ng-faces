import { Component, OnInit, Input } from '@angular/core';
import { Face } from 'src/app/services/faces-detection/faces-recognized.model';

@Component({
  selector: 'app-face-detected',
  templateUrl: './face-detected.component.html',
  styleUrls: ['./face-detected.component.scss']
})
export class FaceDetectedComponent implements OnInit {
  @Input() face: Face;

  constructor() { }

  ngOnInit() {
  }

}
