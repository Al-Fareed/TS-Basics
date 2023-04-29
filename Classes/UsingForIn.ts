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
var p = new Passenger("John", "Abraham", 123);
p.display();
 for(let item in p)
 {
    console.log(p[item]);
    
 }