var Flight = /** @class */ (function () {
    function Flight(flightNo, from, to) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    Flight.prototype.display = function () {
        console.log("Flight no:" + this.flightNo + "\nFrom:" + this.from + "\nTo:" + this.to);
    };
    return Flight;
}());
var flight = new Flight(1234, "Bangalore", "New Delhi");
flight.display();
