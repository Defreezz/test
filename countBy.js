function countBy(x, n) {
    let z = [];
    for (let i = x; i <= x * n; i = i + x){ // i = 2; 2,4 <= 10; 2,4,
    z.push(i);}
    return z;
}
console.log(countBy(2,5));