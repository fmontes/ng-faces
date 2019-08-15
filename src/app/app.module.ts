import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageFileFormComponent } from './components/image-file-form/image-file-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageFileFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
