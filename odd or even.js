function even_or_odd(number) {
    if (number % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }

}
console.log(even_or_odd(9))

function even_or_odd_two(number) {
    return number % 2 ? "Odd" : "Even"
}
console.log(even_or_odd_two(22))
