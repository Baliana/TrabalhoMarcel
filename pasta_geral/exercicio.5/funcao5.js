/***********************************************************
 * objetivo:Criar um sistema que gerencie números pares e ímpares
*Data: 20/08/2024
* Autor:fernando*
************************************************************/
function Number(NumeroInicial,NumeroFinal){
    let NumeroI = NumeroInicial
    let NumeroF = NumeroFinal
    let status

    if(NumeroI == ''|| NumeroF == ''){
        console.log('ERRO. Todos os campos devem ser preenchidos.')
        status = false
    }else if(isNaN(NumeroI)||isNaN(NumeroF)){
        console.log('ERRO. Apenas numeros são Validos.')
        status = false 
    }else if(NumeroI <= 0 ||  NumeroI >= 500 ){
        console.log
        status = true
    }else if(NumeroF <=100 ||  NumeroF >= 1000 ){
        console.log
        status = true 
    }else if(NumeroI >= NumeroF){
        console.log('ERRO. O numero Inicial não pode ser maior que o numero Final.')
        status = false 
    }else  if (contadorInicial == contadorFinal) {
        console.log('ERRO. Esse campo não pode ser preenchidos com numeros iguais.')
        status = false
    }else if (contadorInicial < 0 || contadorFinal < 0) {
        console.log('ERRO. Os contadores devem ser não negativos.')
        status = false 
    }
}
 function numero()
 
 // puxar o resto da viisao exemplo: 5%2= 1 o 1 é o resto//
 //let dividendo = 10;
//let divisor = 3;
//let resto = dividendo % divisor;

//console.log(`O resto da divisão de ${dividendo} por ${divisor} é ${resto}.`); // Saída: O resto da divisão de 10 por 3 é 1.
