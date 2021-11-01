function reverseList(list) {
   let b = list.reverse();// return list.reverse()
    //console.log(b);
    return b;
}
reverseListTwo([1,2,3,4]);


let a = [3,5,7,8]
let b = a.reverse();
console.log(b);

function reverseListTwo(list) {
    var array = [];
    for (var i = list.length-1; i >= 0; i --){
        array.push(list[i]);
    }
    return array;
}
console.log(reverseListTwo([1,2,3,4,5,6,7,8,1]));
