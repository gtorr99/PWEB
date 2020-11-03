export class SlideService{
    
    index = 0;
    MAX = 6;

    incrementIndex(){
        if(this.index < this.MAX)
            this.index++;
        else
            this.index = 0;
    }

    decrementIndex(){
        if(this.index > 0)
            this.index--;

    }
}