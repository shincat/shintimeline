import { ShinEvent,ShinEventDispatcher } from 'shinevent';
import TimeEgineAd from './TimeEgineAd';
import  ShinTimeEvent  from './ShinTimeEvent';
import TimeEgineOrginal from './TimeEgineOrginal';
class ShinTimeLine extends ShinEventDispatcher{
    
    constructor(){
        super();
        if(ShinTimeLine._ins)
        {
            throw('ShinTimeLine is a single, it could not define by "new" function,using ShinTimeLine.ins instead of new');
            return ShinTimeLine._ins
        }
        ShinTimeLine._frameRate=24;
        //初始化时间引擎
        this.setEgine();
        this.start();
        this.startFrameTime= this.startMiunte= this.startSencond=this.startHour=this.starttime=Date.now();
    }
    static  get ins(){
        if(!ShinTimeLine._ins){
            ShinTimeLine._ins=new ShinTimeLine();
        }
        return ShinTimeLine._ins;
    }

    /**
     *
     *
     * @memberof ShinTimeLine
     * @param number
     */
    set frameRate(_num)
    {
        ShinTimeLine._frameRate=_num || 24;
    }


    /**
     *
     *
     * @readonly
     * @memberof ShinTimeLine
     */
    get frameRate()
    {
        return  ShinTimeLine._frameRate;
    }
    
    setEgine(){
        //如果支持requestanimation
        if(window.requestAnimationFrame)
        {
            this.egine=new TimeEgineAd();
        }
        else{
            this.egine=new TimeEgineOrginal();
        }
    }
    start(){
        if(!this.isStart)
        {
            this.egine.step(()=>{this.call()});
            this.isStart=true;
        }
    }
    call(){
        let now=Date.now();
        let timeoff=1000/ShinTimeLine._frameRate;
        if(now-this.startFrameTime>=timeoff)
        {
            this.startFrameTime=now;
            this.dispatchEvent(new ShinTimeEvent(ShinTimeEvent.FRAME));
        }
        //one minute
        timeoff=1000;
        if(now-this.startSencond>=timeoff)
        {
            this.startSencond=now;
            this.dispatchEvent(new ShinTimeEvent(ShinTimeEvent.SECOND));
        }
        timeoff=60000;
        if(now-this.startMiunte>timeoff)
        {
            this.startMiunte=now;
            this.dispatchEvent(new ShinTimeEvent(ShinTimeEvent.MINUTE));
        }
        timeoff=360000;
        if(now-this.startHour>timeoff)
        {
            this.startHour=now;
            this.dispatchEvent(new ShinTimeEvent(ShinTimeEvent.HOUR));
        }
    }
    

}
export default ShinTimeLine.ins