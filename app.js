const assert = require("assert");

function calculateDiscount(price, percentage) {
    // BUG: percentage is incorrectly treated as a fixed amount
    return price - percentage;
}

const result = calculateDiscount(200, 20);

console.log("Calculated price:", result);

assert.strictEqual(result, 160);

console.log("All tests passed!");
