import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Attributes } from 'src/app/services/faces-detection/faces-recognized.model';

@Component({
  selector: 'app-face-detected',
  templateUrl: './face-detected.component.html',
  styleUrls: ['./face-detected.component.scss']
})
export class FaceDetectedComponent implements OnInit {
  @HostBinding('class.found')
  @Input()
  info: Attributes;

  constructor() {}

  ngOnInit() {}
}
