import {Mobile} from './Mobile'
class BasicPhone extends Mobile{
    mobileType:string;
    constructor(mobileId:number,mobileName:string,mobileCost:number,mobileType:string)
    {
        super(mobileId,mobileName,mobileCost);
        this.mobileType=mobileType
    }
    printMobileDetail():void{
        console.log("Id:",this.mobileId);
        console.log("Name:",this.mobileName);
        console.log("Cost:",this.mobileCost);
        console.log("Type:",this.mobileType);
    }
}

var bp=new BasicPhone(1,"AbdullahPhone",5000,"digital");
bp.printMobileDetail();
