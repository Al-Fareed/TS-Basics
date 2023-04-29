class Passenger{
    constructor(public firstName :string,
        public lastName :string,
        public frequentFlyer:number) {}

        display(){
            console.log(this.firstName+" "+this.lastName+ " "+this.frequentFlyer);
        }
}
var p = new Passenger("JOhn","rhodes",123);
p.display();