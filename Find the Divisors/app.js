
function divisors(integer) {

    var n_factors = [], i;

    for (i = 1; i <= Math.floor(Math.sqrt(integer)); i += 1)
        if (integer % i === 0) {
            n_factors.push(i);
            if (integer / i !== i)
                n_factors.push(integer / i);
        }
    n_factors.sort(function (a, b) { return a - b; });  // integereric sort
    if (n_factors.length == 2){
        return integer + " is prime."
    } else {
        n_factors.pop();
        n_factors.splice(0,1);
        return n_factors;
    }
};

console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));
