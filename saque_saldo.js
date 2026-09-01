var saldo = 300.00,
    saque = operacaoSaq(),
    deposito = operacaoDep();
    
function operacaoDep(dep, msgDep){
    var valDep = 500.00;
    if(valDep >= 400){
       dep = saldo + valDep;
       msgDep =`O saldo após o deposito de ${valDep} é de: ${dep}`;
    }else{
        dep = saldo + 0;
        msgDep = 'Não houve depósito';
    }
    return {
        sldDep: dep,
        msg: msgDep,
    }
}
function operacaoSaq(saq, msgSaq){
    var valSaq = 200.00;
    if(valSaq >= 200){
        saq = operacaoDep().sldDep - valSaq;
        msgSaq = `O seu saldo após o saque de ${valSaq} é de: ${saq}`;
    }else{
        saq = saldo - 0;
        msgSaq = 'Não houve saque.';
    }
    return {
            sldSaq: saq,
            sldMsg: msgSaq,
        }

}
console.log(deposito.sldDep);
console.log(deposito.msg)
console.log(saque.sldSaq);
console.log(saque.sldMsg);