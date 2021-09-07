function fillArray(number, bitsArray) {
    while (number !== 0) {
        bitsArray.push(number % 2);
        number = Math.floor(number / 2);
    }
}

function countReversedNumber(bitsArray) {
    let result = 0;
    for (let i = 0; i < bitsArray.length; i++) {
        if (bitsArray[i]) {
            result = Math.pow(2, bitsArray.length - i - 1) + result;
        }
    }
    return result;
}

function reverseBits(number) {
    const bitsArray = [];
    fillArray(number, bitsArray);
    return countReversedNumber(bitsArray);
}

console.log(reverseBits(417), 267);
console.log(reverseBits(267), 417);
console.log(reverseBits(0), 0);
console.log(reverseBits(2017), 1087);
console.log(reverseBits(1023), 1023);
console.log(reverseBits(1024), 1);






