
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
function playSound(e){
const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key =document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if(!audio) return;
    audio.currentTime=0;
    audio.play()
    console.log(key);
    key.classList.add('playing');
}
const keys=Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitioned',removeTransition));
window.addEventListener('keydown',playSound);