import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceDetectedComponent } from './face-detected.component';

describe('FaceDetectedComponent', () => {
  let component: FaceDetectedComponent;
  let fixture: ComponentFixture<FaceDetectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceDetectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceDetectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
