function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    //return
    {
        return {status:msg};
    }
}
console.log(getStatus(true));