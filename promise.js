
function v (...args) {
    arg = [...args]
    console.log(arg)
    let a = 1
    return function (){
        return a++
    }
}
v(1,2,3,4,5)

console.log()




//  function sleep(ms) {
//     setTimeout(() => {
//         console.log(ms)
//     }, ms * 1100)
// }
// async function show() {
//
//     await sleep(3)
//     await sleep(2)
//     await sleep(1)
//     console.log("b")
// }
//
// show()

//////////////////

// let porom = new Promise((res,rej) => {
//     setTimeout((response) =>{
//         rej("some err")
//         console.log(response)
//     },100,{a:5,b:6})
// }).catch(err => console.log(err))
// console.log("1");
//
// new Promise((res) => {
//     console.log("2");
// }).then(() => {
//     console.log("3");
// });
//
// setTimeout(() => {
//     console.log("4");
// }, 0);
//
// new Promise((res) => {
//     console.log("5");
//
//     res();
//
//     console.log("6");
// }).then(() => {
//     console.log("7");
// });
//
// Promise.resolve().then(() => {
//     console.log("8");
// });
//
// console.log("9");