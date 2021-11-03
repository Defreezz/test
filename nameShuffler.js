function nameShuffler(str){
    let re = /(\w+)\s+(\w+)/;
    let a = str.replace(re, "$2 $1");
    console.log(a);
    return a;
}
nameShuffler("john McClane")