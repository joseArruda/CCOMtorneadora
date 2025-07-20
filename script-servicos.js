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