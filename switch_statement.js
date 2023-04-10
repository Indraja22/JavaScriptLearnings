const day = "Wednesday";

switch(day) {
    case 'Monday': // day === 'Monday'
        console.log(`Plan Course Structure`);
        console.log(`Go to coding meetup!`);
        break;
    case 'Tuesday':
        console.log(`Prepare Theory Videos`);
        break;
    case 'Wednesday':
    case 'Thrusday':
        console.log(`Write code`);
        break;
    case 'Friday':
        console.log(`Record Videos`);
    case 'Saturday':                    
    case 'Sunday':
        console.log(`Enjoy The Weekend!`);          
        break;
    default:
        console.log(`Invalid Day!`);              
}

if (day === 'Wednesday' || day === 'Thrusday') {
    console.log('Write Code');
}