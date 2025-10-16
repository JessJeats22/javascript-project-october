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

let cellsEl; // creating this variable to put cellsEl in the global scope 
let width = 15
let height = 15

const gridEl = document.querySelector('#grid');

const makeGrid = () => {

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
    // console.dir(cellsEl);
}

makeGrid();

// console.log(cellsEl)
// console.log(cellsEl[107])


// Step 2: Creating Snake 

let snakeCellsLocation = [
    cellsEl[107],
    cellsEl[108],
    cellsEl[109],
    cellsEl[110],];
// console.log(snakeCells)

// Step 3: show the snake on the board:

const showSnakeCells = () => {
    snakeCellsLocation.forEach((cell, idx, array) => {
        cell.style.backgroundColor = 'green';
    }
    )
};
showSnakeCells();

//Step 4 - track snake direction with event listener

let direction;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && direction !== 'down') direction = 'up';
    else if (event.key === 'ArrowDown' && direction !== 'up') direction = 'down';
    else if (event.key === 'ArrowRight' && direction !== 'left') direction = 'right';
    else if (event.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
});



// Step 5: Moving Snake - add a cell to the array whilst removing a cell from the array on loop 

const makeSnakeMove = () => {
    const snakeHead = snakeCellsLocation[snakeCellsLocation.length - 1]; // grabs the last element of the snake (the head) and stores it for later use
    const headIndex = Number(snakeHead.id); //converts the head cell’s id (string) using Number(value) function, into a number as we will need it in the number value
    let nextCellIndex; // will store where the snake is about to move but no value for this yet so null, defined below
    // console.log(nextCellIndex)

    if (direction === 'right') nextCellIndex = headIndex + 1; // + 1 on the index, defining nextCellIndex based on travel direction
    else if (direction === 'left') nextCellIndex = headIndex - 1; //- 1 on the index
    else if (direction === 'up') nextCellIndex = headIndex - width; // go one row up so - 15 from cellindex
    else if (direction === 'down') nextCellIndex = headIndex + width; //go one row down so +15 from cell index 

    // Determine next cell based on direction 

    const nextCell = cellsEl[nextCellIndex]; // stored cellsEl as an array (list) of grid cells, creating a variable (nextCell) as the DOM element and linking in to the next index



    //add new snake head 
    nextCell.style.backgroundColor = 'green'; // keeps the head green
    snakeCellsLocation.push(nextCell);

    //remove snake tail 
    const snakeTail = snakeCellsLocation.shift();
    snakeTail.style.backgroundColor = '';

    // detecting food and skipping removing the tail to allow snake to grow!!

    if (nextCellIndex === Number(foodCell.id)) { //reminder - Number(value) is a built-in JavaScript function...It takes anything that can represent a number(value) and converts it into a real number type.
        console.log('I ate the food!');
        showFood();
    }

    // edge detection! 

    else if (nextCellIndex < width) { // any index less than width is top (15 in this case)
        console.log('Ive hit the top!');
    } else if (nextCellIndex >= width * (height - 1)) { // any index less than width of bottom 
        console.log('Ive hit the bottom!');
    } else if (nextCellIndex % width === 0) { // use he modulus operator to give us a remainder of 0 
        console.log('Ive hit the left edge!')
    } else if (nextCellIndex % width === width - 1) {
        console.log('Ive hit the right edge!')
    } else if (snakeCellsLocation.includes(nextCellIndex)) { //reminder .includes() is a built-in JavaScript array method checking if an array contains a specific value.
        console.log('Ive hit myself!')
    }

}


// Step 6: make snake move automatically - basic syntax: setInterval(functionToRun, delayInMilliseconds);

setInterval(makeSnakeMove, 500);

// step 7 - show food cell on the grid
let foodCell;

const showFood = () => {
    // allocate food cell a random location
    let foodCellLocation = Math.floor(Math.random() * 225);
    // ensure that the food doesn't land on the snake 
    while (snakeCellsLocation.includes(foodCellLocation)) {
        foodCellLocation = Math.floor(Math.random() * 225);
    }
    // show this visually on the grid
    foodCell = cellsEl[foodCellLocation]; //no need for a "let foodCell" as alread have foodCell as a variable in global scope 
    // style the foor color red 
    foodCell.style.backgroundColor = "red";
}
showFood();


// if snake cells collide with food cell, re locate food cell
if (nextCellIndex === foodCellLocation) {
    console.log('I ate the food!');
}
// foodCellLocation = Math.floor(Math.random() * 225);

