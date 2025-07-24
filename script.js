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

/*Link de acesso ao Whatsapp*/

function enviar(event){
    event.preventDefault();
    const mensagem = "Olá, venho pelo site. Gostaria de solicitar o orçamento dos serviços disponíveis.";
    const numero = '5561996114751';
    const msgFormatada = encodeURIComponent(mensagem);
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${msgFormatada}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
};

