function numberToPower(number, power){
    // Code here
    s = 0
    for (let i=0; i<power; i++){
        s *=number
    }
    return s;
}