import { TestBed } from '@angular/core/testing';

import { FacesDetectionService } from './faces-detection.service';
import { HttpClientModule } from '@angular/common/http';

describe('FaceDetectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: FacesDetectionService = TestBed.get(FacesDetectionService);
    expect(service).toBeTruthy();
  });
});
