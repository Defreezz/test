/*
function wrap(value) {
    const wp ={

    };
    wp.value = value;
    return;
}
wrap("sas");
console.log(wp);

function greet(a,b){
    let c =  a + " " + b;
    return c;
};


console.log(greet("hello", "world!"));
function greett(a){
    //let c = a + " " + b;
    return a;
};
console.log(greett("hello world!"));
*/
/*
function areYouPlayingBanjo(name) {
    if (name[0] === "R" || name[0] === "r"){
        return name + " plays banjo"
    }
    return name;
}
console.log(areYouPlayingBanjo("Ringo"));
*/
//const areYouPlayingBanjo = name => name[0] === "R" || name[0] === "r" ? name + " plays banjo" : name + " does not play banjo";
//console.log(areYouPlayingBanjo("Ringo"));
function grader(score) {
    if (score > 1 || score < 0.6){
        return "F";
    }else if (score === 0.9) {
        return "A";
    }else if (score === 0.8) {
        return "B";
    }else if (score === 0.7) {
        return "C";
    }else {
        return "D";}
}
console.log(grader(0.6));