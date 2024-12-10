const randomColor = function (){
    const hex = "123456789ABCDEF"
    let color = "#"
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
let stopinterval;
const startChangingColor = function (){
    stopinterval = setInterval(changeBgcolor,1000)
    function changeBgcolor(){
        document.body.style.backgroundColor = randomColor();
    }
}
document.querySelector('#start').addEventListener('click',startChangingColor)

const stopChangingColor = function(){
    clearInterval(stopinterval)
}
document.querySelector("#stop").addEventListener('click',stopChangingColor)