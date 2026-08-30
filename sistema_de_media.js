var n1 = 8.67;
var n2 = 8.35;
var n3 = 8.5;
var mensagem = '';
var presenca = 30;
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
   console.log(`Você foi aprovado por media e presença, com media: ${media.toFixed(1)} e presença: ${presenca}`);
}
        


 
