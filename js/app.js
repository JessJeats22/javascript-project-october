/*--------------------------------- Pseudo ---------------------------------*/
// * Considerations:

// * Inputs (user submitted or computer generated)

// * Variables & State (think scores, choices, timers, lives etc)

// * User Interactions (user initiated events like clicks, hovers, key presses etc)

// * Core Logic / Rules (List the core rules that will dictate the win lose condition)

// * Conditions / Branching (which conditions will lead to which things happening)

// * Loops (if any) (does any logic repeat? For example a ticking timer or in a game of poker maybe multiple computer choices generated on a loop)

// * Outputs / Feedback (What will the app output to the screen)


// Step 1 = creating grid

let cellsEl;

const gridEl = document.querySelector('#grid');

const makeGrid = () => {

    let width = 15
    let height = 15
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

/*-------------------------------- Variables --------------------------------*/

let foodCell;
// let foodCell = document.getElementById('');
// foodCell.addEventListener('click', () =>{
// console.log(foodCell);
// });

let snakeCells = [107, 108, 109, 110];
console.log(snakeCells);


/*------------------------ Cached Element References ------------------------*/

const howToPlayBtn = document.querySelector('.instructions');


/*-------------------------------- Functions --------------------------------*/
// function to make food move, function to make snake move, function to start the game


// Step 2: creating & moving "food"
const showFood = () => {
    // allocate food cell a random location
    foodCellLocation = Math.floor(Math.random() * 225);
    // show this visuall on the grid
    foodCell = document.getElementById(`${foodCellLocation}`);
    // style the foor color red 
    foodCell.style.backgroundColor = "red";
    
    return foodCell;
}
showFood();




const showSnakeCells = () => {
    snakeCells.style.backgroundColor = "green";
}

showSnakeCells();



/*----------------------------- Event Listeners -----------------------------*/
// event listeners for arrows
// event listener for button click 


// document.querySelectorAll('.cell').addEventListener ('click')

/*------------------------------- Page Load ------------------------------*/

