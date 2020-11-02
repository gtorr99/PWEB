import { Component } from '@angular/core';
import { SlideService } from '../slide-service/slide.service';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent{

  constructor(private sl: SlideService, private c: ContentComponent) { }
  
  
  
  onNext(){
    this.sl.incrementIndex();
    // this.c.updateContents();
  }

  onPrevious(){
    this.sl.decrementIndex();
    // this.c.updateContents();
  }

}
