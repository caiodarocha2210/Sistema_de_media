var n1 = 8.67;
var n2 = 8.35;
var n3 = 8.5;
var mensagem = '';
var advert = 0;
var presenca = 60;
var media = (n1 + n2 + n3)/3;

if(media < 6 || presenca < 50){
   if(media < 6 && presenca > 50){
      console.log(`Você reprovou por média, com média: ${media.toFixed(1)}`)
   }else if(media >= 6 && presenca < 50){
      console.log(`Você reprovou por faltas com presença: ${presenca}`)
   }else{
      console.log(`Você reprovou por media e presença, com media: ${media.toFixed(1)} e presença: ${presenca}`);
   } 
}else{
   if(!advert){
      media++;
      console.log('Você recebeu 1 ponto a mais na media por falta de advertências');
   }
   console.log(`Você foi aprovado por media e presença, com media: ${media.toFixed(1)} e presença: ${presenca}`);
}


        

// || - OU lógico, resulta true, caso alguma das condições seja verdadeira
// && - E lógico, resulta em true, caso ambas as condições sejam verdadeiras
// ! - NÃO lógico - SE chuva = true - !chuva = false
 
