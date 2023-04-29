class Passenger{
    constructor(public firstName :string,
        public lastName :string,
        public frequentFlyer:number) {}
}

var p = new Passenger("Al","Fareed",123)
console.log(p.firstName+" "+p.lastName+ " "+p.frequentFlyer);