const myArray = [];
let i = 5
while (i > -1) {
    myArray.push(i);
    i--;
}
console.log(myArray);


const myArrayy = [];

for (let i = 1; i < 6; i++){
    myArrayy.push(i);
}
console.log(myArrayy);

//нечетные
const ourArray = [];

for (let i = 0; i < 10; i++) {
   if (i%2 !== 0) ourArray.push(i);
}
console.log(ourArray);

const myArraya = [];
for (let i = 10; i > 0; i--) {
    if (i%2 !== 0){
        myArraya.push(i);
    }
}
console.log(myArraya);

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++ ){
    total += myArr[i]; // total = total + myArr[i]
}
console.log(total);