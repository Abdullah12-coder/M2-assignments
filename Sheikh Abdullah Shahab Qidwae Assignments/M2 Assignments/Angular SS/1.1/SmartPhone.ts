import {Mobile} from './Mobile'
class SmartPhone extends Mobile{
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
var sp=new SmartPhone(2,"Mi(Abdullah)",15000,"Smart-phone")
sp.printMobileDetail();