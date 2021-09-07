const getUniqueWords = function(string) {
    const wordsArray = string.split(' ');
    const resultArray = [];
    for (let i = 0; i < wordsArray.length; i++) {
        if (!resultArray.includes(wordsArray[i])) {
            resultArray.push(wordsArray[i]);
        }
    }
    return resultArray.join(' ');
}

console.log(getUniqueWords('easy come easy go'));
console.log(getUniqueWords('first things first'));
console.log(getUniqueWords(''));
