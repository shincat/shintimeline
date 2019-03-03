import IShinEgine from './ITimeEgine';
export default class TimeEgineAd extends IShinEgine{
    
    constructor(){
        super();
        this.isStop=false;
    }
    step(callback){
        this.callback=callback;
        window.requestAnimationFrame((timestamp)=>{this.update(timestamp)});
    }
    update(timestamp){
        this.callback.call();
        if(!this.isStop)
        {
            window.requestAnimationFrame((timestamp)=>{this.update(timestamp)});
        }
    }
    resume(){
        this.isStop=false;
    }
    stop(){
        this.isStop=true;
    }
}