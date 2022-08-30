const note = document.querySelector('.nowplaying')
const all = document.querySelectorAll('.key')
const hints = document.querySelectorAll('.hints')
window.addEventListener('keydown',function(e){
        const key =document.querySelector(`.key[data-key="${e.keyCode}"]`);
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if(!key) return
        const keyNote = key.getAttribute('data-note');
        key.classList.add('playing')
        note.innerHTML = keyNote;
        audio.currentTime= 0
        audio.play();
});


function rmeovetransition(){
     this.classList.remove('playing')
}

all.forEach(key => key.addEventListener('transitionend',rmeovetransition))

hints.forEach(function(element,index){
    element.style =`transition-delay :${index*50}ms`
})