const label = document.getElementById('label-input');
const arquivo = document.getElementById('arquivo');

arquivo.addEventListener('change', selecionarArquivo)

function selecionarArquivo(){
    if(arquivo.files.length > 0){
        label.classList.add('arquivo-selecionado');
        label.textContent = "Curriculo anexado"
    } else{
        label.classList.remove('arquivo-selecionado');
        label.textContent = "Selecionar arquivo"
    }
};

/*Acesso ao Whatsapp*/
function enviarFormulario(event){
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const telefone = '5561982540047';
    const mensagem = `Olá meu nome é ${nome} e tenho ${idade} anos, venho pelo site. Gostaria de participar da sua equipe na CCOM Torneadora.`
    const msgFormatada = encodeURIComponent(mensagem);
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}&type=phone_number&app_absent=0`;
    window.open(url, '_blank')
}
