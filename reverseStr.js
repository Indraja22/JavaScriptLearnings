const reverseStr = (strOriginal) => {
   const splitOriString = strOriginal.split("");
   let revStr = "";
   for(let i = splitOriString.length-1;i>=0;i--){
        revStr = revStr + splitOriString[i];
   }
   return revStr;
}
revStrNew = reverseStr("India")
console.log(revStrNew);
// function reverseStr(strOriginal){
//     const splitOriString = strOriginal.split("");
//    let revStr = "";
//    for(let i = splitOriString.length-1;i>=0;i--){
//         revStr = revStr + splitOriString[i];
//    }
//    return revStr;
// }
// revStrNew = reverseStr("India");
// console.log(revStrNew);