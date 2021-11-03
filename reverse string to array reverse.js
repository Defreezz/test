function digitize(n) {

   let nArr = String(n).split('').map(Number).reverse();
    console.log(nArr)
    return nArr;
}
 digitize("123456");

