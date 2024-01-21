let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    ResponsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirmensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto ');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}
exibirmensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'acertou');
        let palavraTentativas = tentativas > 1? 'Tentativas' : 'tentativa';
        let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'o número secreto é maior');
        } 
        tentativas++
        limparcampo()
    }   
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
        
    }
}

function limparcampo(){
    chute = document.querySelector('input');
    chute.value = '';

}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirmensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}