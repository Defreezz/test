let summation = function (num) {
    // Code here
    let arr = [];
    for (let i = 1; i <=num; i++){
        arr.push(i);
    }
    console.log(arr);
    let sum = 0;
    for (let j = 0; j<arr.length; j++){
        sum = sum + arr[j];
    }
console.log(sum);
}
summation(4);