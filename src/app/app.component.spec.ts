import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ImageFileFormComponent } from './components/image-file-form/image-file-form.component';
import { FaceDetectedComponent } from './components/face-detected/face-detected.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, ImageFileFormComponent, FaceDetectedComponent, ImagePreviewComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
