/*--------------------------------- Pseudo ---------------------------------*/
// * Considerations:

// * Inputs (user submitted or computer generated)

// * Variables & State (think scores, choices, timers, lives etc)

// * User Interactions (user initiated events like clicks, hovers, key presses etc)

// * Core Logic / Rules (List the core rules that will dictate the win lose condition)

// * Conditions / Branching (which conditions will lead to which things happening)

// * Loops (if any) (does any logic repeat? For example a ticking timer or in a game of poker maybe multiple computer choices generated on a loop)

// * Outputs / Feedback (What will the app output to the screen)

// const person = {
//     name: John,
//     age: 32,
//     height: 
// }

// person.age


/*-------------------------------- Variables --------------------------------*/
let cellsEl;

// snake = array/list of 4 squares 

let snakeCells = [107, 108, 109, 110];
document.getElementById('107');
snakeCells.length = 4;
// console.log(snakeCells);

let foodCell = document.getElementById('0');
// console.log(food);


/*------------------------ Cached Element References ------------------------*/

const howToPlayBtn = document.querySelector('.instructions');

const gridEl = document.querySelector('#grid');

// creating grid
const makeGrid = () => {

    const width = 15
    const height = 15
    const cellCount = width * height;
    // console.log(cellCount)

    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div')
        // console.dir(cell);
        cell.id = i
        cell.classList.add('cell')
        cell.textContent = i;
        gridEl.appendChild(cell);

    }
     cellsEl = document.querySelectorAll('.cell');
}
makeGrid();


// console.dir(gridEl);
console.dir(cellsEl);
// console.dir (howToPlayBtn);
/*-------------------------------- Functions --------------------------------*/
// function to make food move, function to make snake move, function to start the game

const showSnakeCells = () => {
    snakeCells.style.backgroundColor = "green";
}

showSnakeCells();

const showFood = () => {
    // define foodcell color
    foodCell.style.backgroundColor = "red";
    // define food cell location
    foodCellLocation = Math.floor(Math.random() * 225);
    // assign
    foodCell = document.getElementById(`${foodCellLocation}`);

    foodCell.style.backgroundColor = "red";


    return foodCell;

}
showFood();



/*----------------------------- Event Listeners -----------------------------*/
// event listeners for arrows
// event listener for button click 


// document.querySelectorAll('.cell').addEventListener ('click')

/*------------------------------- Page Load ------------------------------*/

