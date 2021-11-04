function betterThanAverage(classPoints, yourPoints) {
    let result = 0
    for(let i = 0; i<classPoints.length; i++){
        result = result + classPoints[i]/classPoints.length;
    }
   if (result>yourPoints){
        return false;
       }
    console.log(result);
}
betterThanAverage([100,22,33,1,23,13], 44);