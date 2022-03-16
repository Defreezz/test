function getCount(str) {
    var vowelsCount = 0;
    const vowels = ["a","e","i","o","u"]
    for(let a = 0;a<=str.length;a++){

        if (vowels.includes(str[a])){
            vowelsCount +=1
        }
    }
    return console.log( vowelsCount);
    //return console.log(str.length)
}

getCount("asderg")