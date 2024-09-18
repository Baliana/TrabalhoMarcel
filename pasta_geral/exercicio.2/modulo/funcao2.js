/***********************************************************
 * objetivo:- Criar um sistema que gerencie as médias escolares de uma 
universidade
*Data: 13/08/2024
* Autor:fernando*
************************************************************/
function validarDados(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina){
    let nomeAluno
    let nomeProfessor
    let sexoProfessor
    let sexoAluno
    let nomeCurso
    let nomeDisciplina
    let status = true

    if(nomeAluno == ''|| nomeProfessor == ''|| sexoProfessor == ''|| sexoAluno == ''|| nomeCurso == ''|| nomeDisciplina){
        console.log('Erro: é obrigatorio preencher todos os campos ')  
    }else if (sexoAluno != 'Feminino' & sexoAluno != 'Masculino'){
        console.log('ERRO: É obrigatoro que seja respondido o soxo do(a) aluno(a)')
        status = false
    }else if(sexoProfessor != 'Feminino' & sexoProfessor != 'Masculino'){
        console.log('ERRO: É obrigatoro que seja respondido o soxo do(a) professor(a)')
        status = false
    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        console.log('ERRO: É obrigatorio ser preenchidos todos os campos de nota')
    }
    return status
}

function calculoDaMedia(nota1, nota2, nota3, nota4){
    let n1 = nota1
    let n2 = nota2
    let n3 = nota3
    let n4 = nota4
    let media 

    media (n1+n2+n3+n4) /4 
    return media

}

function statusAluno(media){
    let statusAluno
    let media 
    let notaDoexame

    if(media < 50){
        statusAluno = 'REPROVADO'
    }else if(media >= 50 & media <= 69){
        statusAluno = 'Aluno devera fazer o exame.'
    }else if(media <= 50 && sexoAluno == 'Masculino'){
        statusAluno = 'REPROVADO'
    }else if(media <= 50 && sexoAluno == 'FEMININO'){
        statusAluno = 'REPROVADO'
    }else if(media >= 70 && sexoAluno == 'Masculino'){
        statusAluno = 'APROVADO'
    }else if(media <= 70 && sexoAluno == 'FEMININO'){
        statusAluno = 'APROVADO'
    }
        
}

function exame(media, notaDoexame, statusAluno, sexoAluno){
    let media 
    let exame
    let nE = notaDoexame
    let statusAluno
    let sexoAluno
    
    if(media < 50){
        statusAluno = 'REPROVADO'
    }else if(media >= 50 & media <= 69){
        statusAluno = 'Aluno devera fazer o exame.'
    }else if(exame   <= 50 && sexoAluno == 'Masculino'){
        statusAluno = 'REPROVADO'
    }else if(exame <= 50 && sexoAluno == 'FEMININO'){
        statusAluno = 'REPROVADO'
    }else if(exame >= 70 && sexoAluno == 'Masculino'){
        statusAluno = 'APROVADO'
    }else if(exame <= 70 && sexoAluno == 'FEMININO'){
        statusAluno = 'APROVADO'
    }
        
}


function relatorio(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4, notaDoexame){

    let nomeAluno
    let nomeProfessor
    let sexoAluno
    let sexoProfessor
    let nomeCurso
    let nomeDisciplina
    let nota1
    let nota2
    let nota3 
    let nota4
    let notaDoexame
    let media
    let mediaExame

    mediaExame(media + nE)/2

    if(exame   <= 60 && sexoAluno == 'Masculino'){
        statusAluno = 'REPROVADO'
    }else if(exame <= 60 && sexoAluno == 'FEMININO'){
        statusAluno = 'REPROVADO'
    }else if(exame >= 60 && sexoAluno == 'Masculino'){
        statusAluno = 'APROVADO'
    }else if(exame <= 60 && sexoAluno == 'FEMININO'){
        statusAluno = 'APROVADO'
    }
}

