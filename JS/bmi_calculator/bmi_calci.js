const calculateBMI = () =>{
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const bmi = weight/(height/100)**2;
    // alert(`Your BMI is ${bmi.toFixed(2)}`);
    document.getElementById("result").innerHTML = `Your BMI is : ${bmi.toFixed(2)}`;
}

const reset = () =>{
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
}