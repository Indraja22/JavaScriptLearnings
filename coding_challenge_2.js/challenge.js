// const avgScoreDolphins = (96 + 108 + 89)/2;
// const avgScoreKoalas = (88 + 91 + 110)/2;

// if (avgScoreDolphins === avgScoreKoalas){
//     console.log("There is a draw!");
// }else if (avgScoreDolphins > avgScoreKoalas) {
//     console.log("Dolphins Won🥇");
// }else {
//     console.log("Koalas Won🥇");
// }

const avgScoreDolphins = (97 + 112 + 101)/2;
const avgScoreKoalas = (109 + 95 + 123)/2;

if((avgScoreDolphins === avgScoreKoalas) && (avgScoreDolphins >= 100) && (avgScoreKoalas >= 100)){
    console.log("It's a draw!");
}else if (avgScoreDolphins >= 100 && (avgScoreDolphins > avgScoreKoalas)){
    console.log("Dolphins Won");
}else if (avgScoreKoalas >= 100 && (avgScoreKoalas > avgScoreDolphins)){
    console.log("Dolphins Won");
}else {
    console.log("No Winner!");
}  
