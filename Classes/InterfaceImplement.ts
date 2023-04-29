interface IFlight{
    flightNo:number;
    from:string;
    to:string;
    display():void;
}
class Flight implements IFlight{
    flightNo:number;
    from:string;
    to:string;

    constructor( flightNo:number, from:string,to:string){
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    display() {
        console.log("Flight no:"+this.flightNo+"\nFrom:"+this.from+"\nTo:"+this.to);
        
    }
}
var flight = new Flight(1234,"Bangalore","New Delhi");
flight.display();