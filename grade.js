let arr = [2, 5, 6, 10];

let result = arr.reduce(function(sum ,item, index, array){
    return sum += item / arr.length;
});

console.log(result);