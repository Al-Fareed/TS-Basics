var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentFlyer) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyer = frequentFlyer;
    }
    return Passenger;
}());
/**
 *
 */
var p = new Passenger("Al", "Fareed", 123);
console.log(p.firstName + " " + p.lastName + " " + p.frequentFlyer);
