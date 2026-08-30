const n1 = 8.4
const n2 = 3.5;
const n3 = Number.parseInt('5.5'); 

var soma = Number.parseFloat(n1 * n2 + n3);

console.log(soma.toFixed(2)); 

const nome = 'Caio';

console.log('Meu nome é '+ nome + '. O valor da conta é: '+ soma.toFixed(2));


//toFixed - limita o numero de casas decimais em casos de números com ponto flutuante.
// Number.parseInt - converte strings em números do tipo Int ou Float 
/*NaN - Não é um número, retornado em casos de opeções inconsistentes
como na tentativa de multiplicar número por letra*/
// Number.isNaN - testa se a variável é número ou não, retorna true ou false