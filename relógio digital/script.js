
const horas = document.getElementById('hours')
const minutos = document.getElementById('minutes')
const segundos = document.getElementById('seconds')

//Utilizando o setInterval para atualizar o relógio a cada segundo
const clock = setInterval(function time(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    
    if(hours<10) hours = '0' + hours
    if(minutes<10) minutes = '0' + minutes
    if(seconds<10) seconds = '0' + seconds

    horas.textContent = hours
    minutos.textContent = minutes
    segundos.textContent = seconds
})
