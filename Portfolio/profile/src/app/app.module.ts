import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { SlideComponent } from './slide/slide.component';
import { ContentComponent } from './content/content.component';
import { SlideService } from './slide-service/slide.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    SlideComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SlideService, ContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
