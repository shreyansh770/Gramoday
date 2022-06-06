module.exports.conversion = function conversion(convFctr, price) {

    if (convFctr == undefined || price == undefined) {
        return -1;
    }

    let priceKg = price / convFctr;

    return priceKg;

}