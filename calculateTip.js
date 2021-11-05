function calculateTip(amount, rating) {

    switch (rating.toLowerCase()){
        case "terrible":
            return amount -10;
            break;
        case "poor":
            return Math.ceil(amount/100 * 5);
            break;
        case "good":
            return Math.ceil(amount/100 * 10);
            break;
        case "great":
            return Math.ceil(amount/100 * 15);
            break;
        case "excellent":
            return Math.ceil(amount/100 * 20);
            break;
        default:
            return "Rating not recognised"
    }
}