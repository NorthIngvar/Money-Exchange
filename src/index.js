
module.exports = function makeExchange(currency) {
    
    let result = {
        "H":0,
        "Q":0,
        "D":0,
        "N":0,
        "P":0
    }

    if (currency <= 0) {
        return {};
    }

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
  
    let temporary = currency;
    result.H = Math.floor(temporary / 50);
    temporary = currency - result.H * 50;
    result.Q = Math.floor(temporary / 25);
    temporary = temporary - result.Q * 25;
    result.D = Math.floor(temporary / 10);
    temporary = temporary - result.D * 10;
    result.N = Math.floor(temporary / 5);
    temporary = temporary - result.N * 5;
    result.P = Math.floor(temporary / 1);
    temporary = temporary - result.P;

    for (let key in result) {
        if (result[key] === 0) {
            delete result[key];
        }
    }
    return result;
}
