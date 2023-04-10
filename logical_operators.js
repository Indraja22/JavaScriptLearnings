const hasDriversLicense = true;
const hasGoodVision = true;

//AND Operator - && 
//OR Operator - || 
console.log(!hasDriversLicense || hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log("Should Drive");
}else {
    console.log("Should Not Driver!");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Should Drive :)");
}else {
    console.log("Should Not Driver :(");
}