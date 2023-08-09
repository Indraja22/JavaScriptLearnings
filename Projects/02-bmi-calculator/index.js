const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    let bmi_result;
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid Height!"
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid Weight!"
    } else {
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        
        switch (true) {
            case bmi < 18.5:
                bmi_result = "Underweight";
                break;
            case 18.5 < bmi && bmi < 24.9:
                bmi_result = "Healthy Weight";
                break;
            case 25.0 < bmi && bmi < 29.9:
                bmi_result = "Overweight";
                break;
            case bmi > 30.0:
                bmi_result = "Obese";
                break;
            default:
                break;
        }
        results.innerHTML = `<span>${bmi}</span><br><span>You are : ${bmi_result}</span>`
    }
    

});