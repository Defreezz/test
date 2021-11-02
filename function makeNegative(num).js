function makeNegative(num) {

    return num<0 ? num: Number(-num);
}
console.log(makeNegative(9));

var repeatIt = function(str, n) {
   // return str.repeat(n);
    if (typeof str === "string"){
        console.log("строка");
}else {
        console.log("не строка")
    }
}
console.log(repeatIt ("***", 2))