let frase = 'Seja bem vindo ao meu vscode!';
let nula = null;
let unde;
let str = 'Caio';
let n1 = 5;
let souLindo = true; 
souLindo === true? souLindo = 'Sim' : 'Não';
let n2 = '5';
let n3 = 5;
let arrei = ['Caio','João','Maria'];

console.log(Number(n2));
console.log(n3.toString());
console.log(frase.toUpperCase());
console.log(frase.length);
console.log(unde);
console.log(nula);
console.log(`o nome é ${str}, o número é ${n1}, e eu sou lindo? ${souLindo}`);
console.log(arrei.slice(0, 2));/* slice com indice exibe apenas os itens dos
indices citados*/ 
console.log(arrei.slice());// slice sem indice exibe todos os itens do array
arrei.splice(3, 0, 'Julio'); /*splice - adiciona, substitui ou remove
o item de um indice. '3' indice onde vai add, '0' - quantidade de itens a 
remover, 'Julio' - item a ser adicionado.*/ 
console.log(arrei.slice());
arrei.splice(2, 1);
console.log(arrei.slice());
