/***********************************************************
 * objetivo:Criar um sistema para gerenciar o cálculo de uma tabuada
*Data: 13/08/2024
* Autor:fernando*
************************************************************/
function tabuada(tabuadaInicial, tabuadafinal, contadorInicial, contadorFinal){
    let tabuadaI = tabuadaInicial
    let tabuadaF = tabuadafinal
    let contadorI = contadorInicial
    let contadorF = contadorFinal
    let status = true

    if(tabuadaI == '' || tabuadaF == ''|| contadorI == ''|| contadorF==''){
        console.log('ERRO:Todos os campos devem ser preenchido.')
        status = false
    }else if(isNaN(tabuadaI)||isNaN(tabuadaF)||isNaN(contadorI)||isNaN(contadorF)){
        console.log('ERRO:Todos os campos devem ser preenchido.')
        status = false
    }else if(tabuadaI < 2 ||  tabuadaI > 100 || tabuadaF <2 || tabuadaF >100 ){
        console.log
        status = true
   
    }
}

function tabuada(tabuadaInicial, tabuadafinal, contadorInicial, contadorFinal){
    let tabuadaI = Number(tabuadaInicial)
    let tabuadaF = Number(tabuadafinal)
    let contadorI = Number(contadorInicial)
    let contadorF = Number(contadorFinal)
    let status =  true 
    let resultado

    while(tabuadaI <= tabuadaF){
        console.log (`tabuada ${tabuadaI}` )

        while(contadorI <= contadorF){
            status = true
            resultado = tabuadaI * contadorI
            console.log(`${tabuadaI} * ${contadorI} = ${resultado}`)
            contadorI +=1
            contadorI + contadorF
        }
        contadorI = Number(contadorInicial)
        tabuadaI += 1
    }
    return status
}

tabuada(2,7,1,10)