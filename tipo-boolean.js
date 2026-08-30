const estudante = 'Caio';
var n1 = 8.2;
var n2 = 2.3;
var n3 = 2.5;
var estaAprovado;

var media = Number.parseFloat(n1 + n2 + n3)/3;

if(media >=6){
    estaAprovado = true 
    if(estaAprovado === true){
        console.log(`Parabens ${estudante.toUpperCase()}, você está aprovado!Sua nota é: ${media.toFixed(2)}`);
        console.log(typeof estaAprovado);
    }
}else{
    estaAprovado = false
    console.log(`${estudante}, infelizmente você está reprovado! Sua media foi: ${media.toFixed()}.`);
    console.log(typeof estaAprovado);
}
 
/* Boolean = true or false. e qualquer comparação de verdadeiro ou falso
é considerada booleano*/
// typeof - mostra o tipo de dado da variavel.// 