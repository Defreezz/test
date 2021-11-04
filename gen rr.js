function generateRange(min, max, step){
    let arr = [];
    for (let i=min;i<=max;i+=step){
        arr.push(i);
    }
    console.log(arr);
    return arr;
}
generateRange(1, 5,2);