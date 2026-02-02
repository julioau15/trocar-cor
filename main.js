'use strict'
const btnTrocar = document.getElementById('btn-trocar')

function trocarCor(){
    const txtInput = document.getElementById('txt-input')
    
    if(txtInput.value == ''){
        alert('[ERRO] O campo está vazio')
    }else{
        document.documentElement.style.setProperty('--cor-bg', txtInput.value)
    }
}

btnTrocar.addEventListener('click', trocarCor)