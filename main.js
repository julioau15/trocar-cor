'use strict'
const btnTrocar = document.getElementById('btn-trocar')
const txtInput = document.getElementById('txt-input')
function trocarCor(){
    if(txtInput.value == ''){
        alert('[ERRO] O campo está vazio')
    }else{
        verificarCor(txtInput.value.toLowerCase())
    }
}
function verificarCor(cor){
    let traduzirCor = document.documentElement.style
    if(cor == 'vermelho'){
        traduzirCor.setProperty('--cor-bg', 'red')
    }else if(cor == 'azul'){
        traduzirCor.setProperty('--cor-bg', 'blue')
    }else if(cor == 'amarelo'){
        traduzirCor.setProperty('--cor-bg', 'yellow')
    }else if(cor == 'verde'){
        traduzirCor.setProperty('--cor-bg', 'green')
    }else{
        traduzirCor.setProperty('--cor-bg', cor)
    }
}
btnTrocar.addEventListener('click', trocarCor)