import { TestBed } from '@angular/core/testing';

import { FacesDetectionService } from './faces-detection.service';

describe('FaceDetectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacesDetectionService = TestBed.get(FacesDetectionService);
    expect(service).toBeTruthy();
  });
});
