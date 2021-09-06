const factorial = (number) => {
    if (number === 1) {
        return number;
    }
    return number * factorial(number - 1);
}

console.log(factorial(4), '24');
console.log(factorial(7), '5040');
console.log(factorial(17), '355687428096000');
