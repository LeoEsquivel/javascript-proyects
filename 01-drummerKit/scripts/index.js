const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    
    if( !audio ) return;

    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition( e ) {
    if( e.propertyName !== 'transform') return;
    this.classList.remove('playing') //This = a la key
}

const keys = document.querySelectorAll('.key');
keys.forEach( key => 
    key.addEventListener('transitionend', removeTransition)
);

window.addEventListener('keydown', playSound);


