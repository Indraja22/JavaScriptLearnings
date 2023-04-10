const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3)/3;
}

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= (avgKoalas * 2)) {
        return `The Dolphins Win🥇 With ${avgDolphins} Vs. ${avgKoalas} points!`;
    }else if (avgKoalas >= (avgDolphins * 2)) {
        return `The Koalas Win🥇 With ${avgKoalas} Vs. ${avgDolphins} points!`;
    }else {
        return `There is no winner!`;
    }
}

const avgDolphins = calcAverage(44,23,71);
const avgKoalas = calcAverage(65,54,49);
console.log(checkWinner(avgDolphins, avgKoalas));

const avgDolphins1 = calcAverage(85,54,41);
const avgKoalas1 = calcAverage(23,34,27);
console.log(checkWinner(avgDolphins1, avgKoalas1));