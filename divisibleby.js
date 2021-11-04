function divisibleBy(numbers, divisor){
    let result = [];
    for (let i = 0; i<=numbers.length; i++){
        if(numbers[i]%divisor === 0 ){
            result.push(i)
        }

    }
    console.log(result);
    return result;
}

divisibleBy([2,4,3,,5,], 2)