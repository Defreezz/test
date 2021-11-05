function twoDecimalPlaces(n) {
    // Your code here
    console.log(n.toFixed(2));
    return Math.round(n, -2)
}


twoDecimalPlaces(4.659725356)