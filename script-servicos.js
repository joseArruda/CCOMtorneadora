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
        origin: 'bottom',
        distance: '20px',
        easing: 'ease-in-out'
    })

/*Botão de acessoa ao Whatsapp - Footer*/

function enviar(event){
    event.preventDefault();
    const mensagem = "Olá, venho pelo site. Gostaria de solicitar o orçamento dos serviços disponíveis.";
    const numero = '5561982540047';
    const msgFormatada = encodeURIComponent(mensagem);
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${msgFormatada}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
};

/*Botão de acessoa ao Whatsapp - Solda */

function enviarSolda(event){
    event.preventDefault();
    const mensagem = "Olá, venho pelo site. Gostaria de solicitar o orçamento dos serviços de soldagem.";
    const numero = '5561982540047';
    const msgFormatada = encodeURIComponent(mensagem);
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${msgFormatada}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
};

/*Botão de acessoa ao Whatsapp - Usinagem */

function enviarUsinagem(event){
    event.preventDefault();
    const mensagem = "Olá, venho pelo site. Gostaria de solicitar o orçamento dos serviços de Usinagem.";
    const numero = '5561982540047';
    const msgFormatada = encodeURIComponent(mensagem);
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${msgFormatada}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
};

/*Botão de acessoa ao Whatsapp - Pintura */

function enviarPintura(event){
    event.preventDefault();
    const mensagem = "Olá, venho pelo site. Gostaria de solicitar o orçamento dos serviços de Pintura.";
    const numero = '5561982540047';
    const msgFormatada = encodeURIComponent(mensagem);
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${msgFormatada}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
};

/*Botão de acessoa ao Whatsapp - Engrenagem */

function enviarEngrenagem(event){
    event.preventDefault();
    const mensagem = "Olá, venho pelo site. Gostaria de solicitar o orçamento dos serviços de Engrenagem.";
    const numero = '5561982540047';
    const msgFormatada = encodeURIComponent(mensagem);
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${msgFormatada}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
};