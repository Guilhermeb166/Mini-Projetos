var entrada = document.getElementById('entrada');
entrada.addEventListener('input',function(){
    /*O primeiro argumento é o tipo de evento que estamos ouvindo. Neste caso, é "input". O evento "input" é acionado sempre que o valor de um elemento de entrada é modificado pelo usuário. Isso inclui digitar texto, colar texto ou usar as setas de aumento/diminuição em campos numéricos. */

    
    
    // Substitui todas as vírgulas por pontos
    if (entrada.value.length > 4){
        entrada.value = entrada.value.slice(0,4);
    }
})

function calcular(){
    var entrada = document.getElementById('entrada').value
    var resultado = document.querySelector('#resultado p')
    let inicial = document.getElementById('unidadeinicial').value
    let final = document.getElementById('unidadefinal').value
    var numEntrada = parseFloat(entrada)

    

    if(isNaN(numEntrada)){
        window.alert('Error,digite um número válido')
        return
    }
    if(inicial === 'C' && final=== 'K'){
       var resultadofinal = numEntrada + 273
    }else if(inicial ===  'C' && final ==='F'){
        var resultadofinal = numEntrada *1.8 + 32
    }else if(inicial === 'K' && final === 'C'){
        var resultadofinal = numEntrada - 273
    }else if(inicial === 'K' && final === 'F'){
        var resultadofinal = (numEntrada - 273) *1.8 + 32
    }else if(inicial === 'F' && final === 'C'){
        var resultadofinal = (numEntrada - 32) / 1.8
    }else if(inicial === 'F' && final === 'K'){
        var resultadofinal = ((numEntrada - 32) * 5)/9 +273
    }else{
        window.alert('Error, escolha uma unidade válida')
        return
    }
    resultado.innerHTML = parseFloat(resultadofinal).toFixed(2)
}