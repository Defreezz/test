function stringy(size) {
    let str = ""
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
           str= str + "1";
        } else {
           str= str + "0"
        }
        console.log(str);
    }
    return str;
}
stringy(3)