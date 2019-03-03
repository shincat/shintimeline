import IShinEgine from './ITimeEgine';
export default class TimeEgineOrginal extends IShinEgine{    
    constructor(){
        super();
        this.timeout=null;
        this.isStop=false;
    }
    step(callback){
        this.callback=callback;
        this.timeout=setTimeout(()=>{
            this.update()
        },10)
        //window.requestAnimationFrame((timestamp)=>{this.update(timestamp)});
    }
    update(){
        this.callback.call();
        if(!this.isStop)
        {
            this.timeout=setTimeout(()=>{
                this.update()
            },10)
        }
       
    }
    resume(){
        this.isStop=false;
    }
    stop(){
        this.isStop=true;
    }
}