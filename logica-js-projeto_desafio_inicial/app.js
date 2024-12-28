/*
diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana == 'Sabado') {
        alert('Bom fim de semana');
 } else if (diaDaSemana == 'Domingo') {
            alert('Bom final de semana');
 }          else {
                alert('Boa Semana');
 }         
*/

/*
numero = prompt('Digite um numero positivo ou negativo');
if (numero > 0) {
    alert('Numero positivo');
} else {
    alert('Numero negativo')
}
*/
/*
pontuacao = prompt('Digite um numero');
pontuacao = 105;
if (pontuacao >= 100) {
    console.log('Parabens voce venceu');
} else {
    console.log('Tente novamente para ganhar');
}
*/
/*
let saldoConta = 500;
alert(`Seu saldo é de R$ ${saldoConta}`);
*/

/*
let nome = prompt('Qual o seu nome');
alert(`Boas vindas ${nome}`);
*/

/*
let contador = 1;

while (contador < 4) {
  console.log('Executando a iteração ' + contador);
  contador = contador + 1;
}
*/

/*
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    contador--;
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
}

let media = soma / qtdNumeros;

console.log(media);

*/

/*
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

*/

/*
let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}

*/

/*
let numeroMaximo = prompt('Digite um numeri para a contagem regressiva:');

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}
*/

/*
let numeroMaximo = prompt('Digite um numero para a contagem progressiva:');
let contador = 0;
while (contador <= numeroMaximo) {
    console.log(contador);
    contador++;
}
*/

/*
let idade = 25;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}
*/

/*
let nome = 'Carlos Spagnol';
alert(`Ola, ${nome}!`);
*/

/*
let linguagemPreferida = prompt("Qual a linguagem de programação que voce mais gosta?");
console.log(linguagemPreferida);
*/

/*
let valor1 = 37;
let valor2 = 58;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)
*/

/*
let valor1 = 33;
let valor2 = 27;
let resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
*/

/*
let idade = prompt('Digite a sua idade:');
if (idade > 17) {
    console.log('Voce é maior de idade.' );
} else {
    console.log('Voce é menor de idade.')
}
*/

/*
var numero = parseFloat(prompt('Digite um numero:'));
if (numero > 0) {
    console.log('O numero é positivo.');
} else if (numero < 0) {
    console.log('O numero é negativo.');
} else{
    console.log('O numero é zero.');
}
*/

/*
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}
*/

/*
let nota = 5;
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado')
}
*/

/*
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);
*/
/*
let numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio);
*/

function exibirOla() {
    console.log('Ola Mundo !')
}