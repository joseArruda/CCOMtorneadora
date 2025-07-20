/*Carrossel de imagens*/
const slider = document.querySelectorAll('.slide');
const btnBack = document.getElementById('back-image');
const btnNext = document.getElementById('next-image');

let currentImage = 0;

function hideSlider(){
    slider.forEach(item=>item.classList.remove('on'))
};

function showSlider(){
    slider[currentImage].classList.add('on')
};

function nextSlider(){
    hideSlider();
    if(currentImage === slider.length - 1){
        currentImage = 0
    } else {
        currentImage++
    }
    showSlider();
}

function backSlider(){
    hideSlider();
    if(currentImage === 0){
        currentImage = slider.length - 1
    } else {
        currentImage--
    }
    showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnBack.addEventListener('click', backSlider);

/*Animações de textos*/
    const sr = ScrollReveal({ reset: true });

    sr.reveal('.transicao', {
    duration: 1000,
    origin: 'top',
    distance: '20px',
    easing: 'ease-in-out'
    });

    sr.reveal('.degrade', {
        duration: 1000,
        origin: 'right',
        distance: '20px',
        easing: 'ease-in-out'
    })