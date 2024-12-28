alert('Boas vindas ao jogo do numero secreto');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute nao for igual ao numero
while (chute != numeroSecreto) { // != enquanto
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) { // == é igual
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secrteto é menor que ${chute}`);
        } else {
            alert(`O numero secrteto é maior que ${chute}`);
        }
        // tentativas = tentativas +1 a melhor fomra esta abaixo
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
