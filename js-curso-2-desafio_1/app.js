let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole() {
console.log('O botao foi clicado');
}
function botaoAlert() {
    console.log('Eu amo JS');
    }
function botaoPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que voce gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de voce`)
}
function botaoSoma() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro numero'));
    let segundoNumero = parseInt(prompt('Digite o segundo numero'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}

/*
function exibirOla() {
    console.log("Olá, mundo!");
  }
    exibirOla();
*/
/*
function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
}
exibirOlaNome('Carlos');
*/
/*
function calcularDobro(numero) {
    return numero * 2;
}
let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);
*/
/*
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}
let media = calcularMedia(4, 7, 10);
console.log(media);
*/
/*
function encontrarMaior(a, b) {
    return a > b ? a : b;
}

let maiorNumero = encontrarMaior(9, 15);
console.log(maiorNumero);
*/
/*
function quadrado(numero) {
    return numero * numero;
}

let resultado = quadrado(10);
console.log(resultado);
*/
/*
function calculaIMC(altura, peso) {
    let ima = peso / (alturaMetros * alturaMetros);
}
*/
/*
function calculaFatorial(numero) {
    if (numero === 0 || numero === 1){
        return 1;
    }
}

let fatorial = 1;
for(let i = 2; i <= numero; i++) {
    fatorial *= i;
}

return fatorial;

let numero = 5;
let resultado = calculaFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);
*/
/*
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 97347.96;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  
  // Exemplo de uso
  let valorEmDolar = 0.05;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);
  */
/*
function calculaAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perimetro da sala: ${perimetro} metros`);
}

let altura = 8;
let largura = 12;
calculaAreaPerimetroSalaRetangular(altura, largura);
*/
/*
function calculaAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    console.log(`Area da sala circular: ${area.toFixed(2)} metros quadrados`)
    console.log(`Perimetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

let raio = 6;
calculaAreaPerimetroSalaCircular(raio);
*/
/*
function mostrarTabuada(numero) {
    for(let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

let numero = 7;
mostrarTabuada(numero);
*/

let listaGenerica = [];

let LinguagemDeProgramacao = ['JavaScrip', 'C', 'C++', 'Kotlin', 'Python'];
LinguagemDeProgramacao.push('Java', 'Ruby', 'GoLang');

nomes = ['JavaScrip', 'Python', 'Go'];
console.log(nomes[0]);

nomes = ['JavaScrip', 'Python', 'Go'];
console.log(nomes[1]);

nomes = ['JavaScrip', 'Python', 'Go'];
console.log(nomes[2]);
