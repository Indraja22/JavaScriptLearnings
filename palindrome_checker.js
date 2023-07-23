const isPalindrome = (strVal) => {
    splitStr = strVal.split("");
    revStr = "";
    for(let i=splitStr.length-1;i>=0;i--){
        revStr = revStr + splitStr[i];
    }
    if(revStr === strVal){
        return true;
    }else {
        return false;
    }
};

console.log(isPalindrome("121"));
console.log(isPalindrome("Indraja"));
console.log(isPalindrome("1234321"));
console.log(isPalindrome("12321"));