let inputDir = {x: 0, y: 0}; 
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let lastPaintTime = 0;
let speed =2;

let snakeArr = [
    {x:15, y:13}
]

food = {x:6, y:7}

// Game function

function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if ((ctime - lastPaintTime)/1000 < 1/speed) {
        return;
    } 

    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine(){

    //Display food and Snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement =  document.createElement('div')
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x; 
        if (index == 0){
            snakeElement.classList.add('head');
        }else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // displaying food
    FoodElement = document.createElement('div')
    FoodElement.style.gridRowStart = food.y;
    FoodElement.style.gridColumnStart = food.x;
    FoodElement.classList.add('food')
    board.appendChild(FoodElement)

}



window.requestAnimationFrame(main);