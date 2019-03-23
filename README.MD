# shintimeline

JavaScript ( ES6 )

A TimeLine Define 

you can use it by installing with command
```
npm install --save shintimeline
```
### where con you use it

you can use it in vue or react or angularjs or somthing like that with webpack+babel
 
## how to use it

```javascript
import {ShinTimeLine,ShinTimeEvent} from 'shintimeline';
//regist event listener ShinTimeEvent.FRAME which will dispatched every 1000/24 milliseconds
ShinTimeLine.addEventListener(ShinTimeEvent.FRAME,this.handleEn,this);
//regist event listener ShinTimeEvent.SECOND which will dispatched every one  SECOND;
ShinTimeLine.addEventListener(ShinTimeEvent.SECOND,this.handleSecond,this);

this.handleEn=function(e)
{
    console.log(e)
};

let second=0;

this.handleSecond=function(e){
    console.log(second++);
}
```
________
### Functions
``` javascript
set frameRate(num:number)

//set the framerate of the timeline;
//you can change the framerate by this set function;
//such as
//change the framerate of ShinTimeLine to 48
ShinTimeLine.frameRate=48;
//then ShinTimeEvent.FRAME will dispatched  every 1000/48 milliseconds

```
```javascript
get frameRate()
//get function
//read the framerate of ShinTimeLine , default 24;
//such as 
const frame= ShinTimeLine.frameRate;
//you will get 24
```

_________
### EVENTS
events which defined in ShinTimeLine
you could regist event listener depends on these events;
```javascript
//dispatch every 1000/24 milliseconds (default)
ShinTimeEvent.FRAME;
//dispatch eventy 1 second
ShinTimeEvent.SECOND;
//dispatch every 1 minute;
ShinTimeEvent.MINUTE;
//dispatch every 1 hour;
ShinTimeEvent.HOUR;

///for example
ShinTimeLine.addEventListener(ShinTimeEvent.MINUTE,this.handleMin,this);
this.handleMin=functino(e)
{
    ///i will execute every one minute;
}
//
```
