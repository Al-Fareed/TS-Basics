var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentFlyer) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyer = frequentFlyer;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyer);
    };
    return Passenger;
}());
var p = new Passenger("JOhn", "rhodes", 123);
p.display();