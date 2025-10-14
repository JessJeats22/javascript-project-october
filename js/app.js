/*--------------------------------- Pseudo ---------------------------------*/
// * Considerations:

// * Inputs (user submitted or computer generated)

// * Variables & State (think scores, choices, timers, lives etc)

// * User Interactions (user initiated events like clicks, hovers, key presses etc)

// * Core Logic / Rules (List the core rules that will dictate the win lose condition)

// * Conditions / Branching (which conditions will lead to which things happening)

// * Loops (if any) (does any logic repeat? For example a ticking timer or in a game of poker maybe multiple computer choices generated on a loop)

// * Outputs / Feedback (What will the app output to the screen)



/*-------------------------------- Variables --------------------------------*/
// snake = array/list of 4 squares 

let snake = [];
    document.getElementById('107');
    snake.length = 4;
// console.log(snake);

let foodCell = document.getElementById('122');
// console.log(food);
/*------------------------ Cached Element References ------------------------*/

const howToPlayBtn = document.querySelector('.instructions');

const gridEl = document.querySelector('#grid');

const cellsEl = document.querySelectorAll ('.cell');
// console.dir(gridEl);
// console.dir(cellsEl);
// console.dir (howToPlayBtn);




/*-------------------------------- Functions --------------------------------*/
// function to make food move
// function to make snake move 
// function to 

const showFood = () => {
    foodCellColor = foodCell.style.backgroundColor = 
    foodCellLocation = Math.floor(Math.random() * 225);
}

console.log(showFood);
/*----------------------------- Event Listeners -----------------------------*/
// event listeners for arrows
// event listener for button click 


// document.querySelectorAll('.cell').addEventListener ('click')

/*------------------------------- Page Load ------------------------------*/

