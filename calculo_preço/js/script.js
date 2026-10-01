//Doom
const preco = document.querySelector('#preco')
const quantidade = document.querySelector('#quantidade')
const desconto = document.querySelector('#desconto')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')

//Evento
botao.addEventListener('click', calculadora)

//Ação

function calculadora(){
    p = Number(preco.value)
    q = Number(quantidade.value)
    d = Number(desconto.value)

    total = p*q
    calculo = total - (total*(d/100))

    resultado.textContent = `Valor final: R$ ${calculo.toFixed(2)}`

}