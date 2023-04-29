var myArray = [];
for (var i = 0; i < 10; i++) {
    myArray.push(function () {
        return i;
    });
}
for (var i = 0; i < 10; i++) {
    console.log(myArray[i]());
}
