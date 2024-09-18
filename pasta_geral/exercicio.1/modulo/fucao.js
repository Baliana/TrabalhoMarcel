function validarDados(peso, altura){
    let A = altura
    let P = peso 
    let status = true

    if(A == ''|| P == ''){
        console.log('ERRO. preencha todos os dados.')
        status = true 
    }else if(isNaN(A)|| isNaN(P)){
        console.log('ERRO: todos os dados devem ser preenchidos com numers.')
        status = false
    }
    return status
}

function imcCalculo(peso, altura){
    let A = altura
    let P = peso 
    let status = false 
    let imc
    
    if(validarDados(altura, peso)){
        imc = P / (A ** A)
    }else{
        console.log('Erro:não é possivel calcucular o imc.')

    }
    return status
}
function classificarImc(peso,altura){
    let imc 
    let status
    
    if(calcularImc(peso,altura)){
        if(imc < 18.5){
            status = 'Abaixo do peso'
        }else if(imc <= 18.5 & imc >= 24.9){
            status = 'Peso normal'
        }else if(imc <= 25 & imc >= 29.9){
            status = 'Acima do peso (sobrepeso)'
        }else if(imc < 30 & imc >=34.9){
            status = 'Obesidade 1'
        }else if(imc < 35 & imc >=39.9){
            status = 'Obesidade 2'
        }else if(imc >= 40){
            status = 'Obesidade 3'
        }
    }
    return status
}