const { count } = require("console");

/***********************************************************
 * objetivo:Desenvolver uma aplicação para a empresa Cálculos 
SA
*Data: 16/08/2024
* Autor:fernando*
************************************************************/
var readline = require('readline')

var entradaDeDados= readline.createInterface({
    input: process.stdin,
    output: process.stdout
 })
     entradaDeDados.question('Digite o primeiro número:', function(numero1){
        n1 = Number(numero1)
        entradaDeDados.question('Digite o segundo numero:', function(numero2){
        n2 = Number(numero2)

        let resultado 
        let status = true
        let soma
        let subtracao
        let multiplicacao
        let divisao

         // entrada de operação que o ususario deseja entrar
         entradaDeDados.question('digite a operação que deseja ser realizada, soma[+], subtração[-], multplicação[*] ou divisão[/] ', function(operacaoMatematica){
            let operacao = operacaoMatematica

            //string.replace(',','.')
            //validação da entrada de dados vazios
            if(n1 == '' || n2 == ''|| operacao ==''){
               console.log('ERRO. é obrigatoria ser preenchidos todos os dados.')
            }else{
               if(isNaN(n1)|| isNaN(n2)){
                  console.log('ERRO. Esse campo não pode ser preenchido com texto.')
               }else{
                  
                  if(operacao == '-'){
                     subtracao = n1 - n2
                     resultado = subtracao
                  }else{

                     if(operacao == '+'){
                        soma = n1 + n2
                        resultado = soma
                     }else{

                        if(operacao == '*'){
                           multiplicacao = n1 * n2 
                           resultado = multiplicacao 
                        }else{

                        
                           if (operacao == '/'){
                              if(Number(n1) == 0 || Number(n2) == 0){
                                    status = false 
                                    console.log('Erro. Não é pssivel dividir um numero por 0')
                              }else{
                                    divisao = n1 / n2 
                                    resultado = divisao.toFixed(2)
                              }
                           }
                           
                        }
                     }
                  }

                  if(status){
                     console.log(`O resultado de ${n1} ${operacaoMatematica} ${n2} é de --> ${resultado}`)
                  }
               }
            }
       })
         
    })
}) 

