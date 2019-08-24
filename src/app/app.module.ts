import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ImageFileFormComponent } from './components/image-file-form/image-file-form.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageFileFormComponent,
    ImagePreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
