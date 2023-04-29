function doubleMe(x) {
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    else if (x && typeof x === "string") {
        console.log("hey " + x);
    }
}
doubleMe(4);
doubleMe("Folks");
