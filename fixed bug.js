function createArray(number){
    let newArray = [];
    console.log(newArray);

    for (let counter = 1; counter <= number; counter+=1){
        newArray.push(counter);
        console.log(newArray);

    }

    return newArray;
}
createArray(5)