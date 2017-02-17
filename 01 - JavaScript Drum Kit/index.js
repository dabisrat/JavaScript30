// goal
// we have 9 buttons and 9 sounds
//attach keypress events to each div that exectues the 
// proper sounds

// approah
  //get divs into an array 
document.addEventListener('keydown', playSound)

function playSound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
  if (key) {
    key.classList.add('playing')
  }
}

document.addEventListener('transitionend', function(e) {
  e.target.classList.remove('playing')
})
   

