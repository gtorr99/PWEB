export class SlideService{
    
    index = 0;
    MAX = 6;

    incrementIndex(){
        if(this.index < this.MAX)
            this.index++;
    }

    decrementIndex(){
        if(this.index > 0)
            this.index--;
    }
}