const calcTip = (billValue) => {
    const tip = (50 <= billValue <= 300) ? (billValue * 0.15) : (billValue * 0.20);
    return billValue + tip;
}

const totals = [calcTip(125),calcTip(555),calcTip(44)];
console.log(totals);    