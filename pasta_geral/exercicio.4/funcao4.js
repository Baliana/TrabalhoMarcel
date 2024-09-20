/***********************************************************
 * objetivo:Calcular o Fatorial
*Data: 20/08/2024
* Autor:fernando*
************************************************************/
function fatorial(valorFatorial){
    let fatorial = valorFatorial
    let resultado = valorFatorial
    let numeroInicial = 1

    // validar os dados 
    if(validarDados(fatorial)){
        while(fatorial >=2){
            numeroInicial *= fatorial
            fatorial--
            resultado = resultado + 'x' + fatorial
        }
    }
    return resultado + '='+ numeroInicial
 
}    

function validarDados(valorFatorial){

    let  fatorial = valorFatorial
    let status = true 

    if (fatorial == ''){
        console.log(' ERRO. Todos os campos devem ser preenchidos.')
        status = fale
    }else if(valorFatorial == 0 ||'' ==1 ){
        console.log('ERRO. Esse valor é invalido, para preencher esse campo o valor deve ser maior que 2.')
        status = false 
    }else if(isNaN(valorFatorial)){
        console.log('ERRO. Esse campo deve ser preenchido apenas com numero.')
        status = false 
    }
    return status
}
console.log(fatorial(7))

