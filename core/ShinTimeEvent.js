import  {ShinEvent}  from 'shinevent';

class ShinTimeEvent extends ShinEvent{
   
    constructor(eventtype){
        super(eventtype);
    }
    static get FRAME(){return "frame"};
    static get MINUTE(){return 'minute'};
    static get SECOND(){return 'second'};
    static get HOUR(){return "hour"};
}
export default ShinTimeEvent;