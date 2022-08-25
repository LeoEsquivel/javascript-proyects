const secondHand = document.querySelector('.second-hand');
const mindsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ( ( seconds / 60 ) * 360 ) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + ((seconds/60)*6) + 90;

    mindsHand.style.transform = `rotate(${minsDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + ((mins/60)*30) + 90;

    hourHand.style.transform = `rotate(${hoursDegree}deg)`
    
} 

setInterval( setDate, 1000);