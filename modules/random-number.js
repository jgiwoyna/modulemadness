function randomNumber(minNum, maxNum){
    return Math.floor(Math.random() * (1 + maxNum - minNum) + minNum);
}

module.exports = randomNumber;
