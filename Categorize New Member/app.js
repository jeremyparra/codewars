function openOrSenior(input) {
    var results = [];
    input.forEach(player => {
        var age = player[0];
        var handycap = player[1];
        if (age >= 55 && handycap > 7) {
            results.push("Senior");
        } else {
            results.push("Open");
        }
    });
    return results;
}
