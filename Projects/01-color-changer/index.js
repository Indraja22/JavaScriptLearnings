const allButtons = document.querySelectorAll(".button");
console.log(allButtons);
const body = document.querySelector('body');

allButtons.forEach(button => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target.id);
        if(e.target.id === 'grey-btn'){
            const buttonId = e.target.id;
            const btnColor = buttonId.split("-");
            body.style.backgroundColor = btnColor[0];
        }
        if(e.target.id === 'yellow-btn'){
            const buttonId = e.target.id;
            const btnColor = buttonId.split("-");
            body.style.backgroundColor = btnColor[0];
        }
        if(e.target.id === 'blue-btn'){
            const buttonId = e.target.id;
            const btnColor = buttonId.split("-");
            body.style.backgroundColor = btnColor[0];
        }
        if(e.target.id === 'white-btn'){
            const buttonId = e.target.id;
            const btnColor = buttonId.split("-");
            body.style.backgroundColor = btnColor[0];
        }
    })
});

