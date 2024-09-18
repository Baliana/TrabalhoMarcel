/***********************************************************
 * objetivo:Criar um sistema para gerenciar o cálculo de uma tabuada
*Data: 13/08/2024
* Autor:fernando*
************************************************************/
function tabuada(tabuadaInicial, tabuadafinal, contadorInicial, contadorFinal){
    let tabuadaInicial
    let tabuadafinal
    let contadorInicial
    let contadorFinal
    let status = true

    if(tabuadaInicial == '' || tabuadafinal == ''|| contadorInicial == ''|| contadorFinal==''){
        console.log('ERRO:Todos os campos devem ser preenchido.')
        status = false
    }else if(isNaN(tabuadaInicial)||isNaN(tabuadafinal)||isNaN(contadorInicial)||isNaN(contadorFinal)){
        console.log('ERRO:Todos os campos devem ser preenchido.')
        status = false
    }else if(tabuadaInicial < 2 ||  tabuadaInicial > 100 || tabuadafinal <2 || tabuadafinal >100 ){
        console.log
        status = true
    }else if(isNaN(nota1 <0 || nota1 >100 || nota2 <0 || nota2 >100 ||nota3 <0 || nota3 >100 || nota4 <0 || nota4 >100 ||){

    }
}

function tabuada(tabuadaInicial, tabuadafinal, contadorInicial, contadorFinal){
    let tabuadaI = Number(tabuadaInicial)
    let tabuadaF = Number(tabuadafinal)
    let contadorI = Number(contadorInicial)
    let contadorF 
    let status =  true 
    let resultado

    while(tabuadaInicial <= tabuadafinal){
        console.log (`tabuada ${tabuadaInicial}` )

        while(contadorI <=contadorF){
            status = true
            resultado = tabuadaI * contadorI
            console.log('${tabuadaI} * ${contador} - ${resultado}')
            contadorI +=1
            contadorI + contadorF
        }
        contadorI + contadorInicial
        tabuada += 1
    }
    return status
}

tabuada(2,7,8,10)
validarDados