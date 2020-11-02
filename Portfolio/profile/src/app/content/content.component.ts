import { Component } from '@angular/core';
import { SlideService } from '../slide-service/slide.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent{

    constructor(public sl: SlideService) { }
    
    title: string;
    texts: string[] = [];
    
    // updateContents(){
    //     // this.texts = [];
    //     switch(this.sl.index){
        
    //     case 1:
    //         console.log(this.sl.index);
    //         this.title = 'Sobre mim';
    //         console.log(this.title);
    //         this.texts.push("Estudo");
    //         this.texts.push("Testo");
    //         this.texts.push("smth");
    //         break;
    //     case 2:
    //       console.log(this.title);
    //         this.title = "Carreira";
    //         break;
    //     case 3:
    //         this.title = "Objetivos";
    //         break;
    //     }
    // }
}
        
      