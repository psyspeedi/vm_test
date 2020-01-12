const bar = document.querySelector('.bar');
const width = bar.offsetWidth;
const barHidden = document.querySelector('.bar-hidden');
const range = document.getElementById('myRange');

const rangeMask = () => {
    if(0 <= range.value && range.value <= 12 ) {
        range.value = 0;
        barHidden.style.left = `0px`
    }
    else if(13 <= range.value && range.value <= 25) {
        range.value = 25;
        barHidden.style.left = `${Math.ceil((width/4 * 1))}px`
    }
    else if(26 <= range.value && range.value <= 38 ) {
        range.value = 25;
        barHidden.style.left = `${Math.ceil((width/4 * 1))}px`
    }
    else if(39 <= range.value && range.value <= 50) {
        range.value = 50;
        barHidden.style.left = `${Math.ceil((width/4 * 2))}px`
    }
    else if(51 <= range.value && range.value <= 75) {
        range.value = 50;
        barHidden.style.left = `${Math.ceil((width/4 * 2))}px`
    }
    else if(76 <= range.value && range.value <= 100) {
        range.value = 100;
        barHidden.style.left = `${Math.ceil(width)}px`
    }

};

range.addEventListener('change', ()=> {
    rangeMask();
});

document.addEventListener('DOMContentLoaded', () =>{
    rangeMask();
});