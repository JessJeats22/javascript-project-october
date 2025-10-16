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

let cellsEl; // creating this global variable to put cellsEl in the global scope to access later 
let width = 15 // this will be my number of columns
let height = 15 // this will be my number of rows

// Step 8 - create food cell and make it appear in random locations 

const gridEl = document.querySelector('#grid'); // grabbing grid element from HTML via the DOM and storing for access 

const makeGrid = () => {

    const cellCount = width * height; // cellCount now equates to 225 (15x15), not harcoding cellCount so I can change size of grid dynamically 
    // console.log(cellCount)

    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div') // using document.createElement to create my a new div element and putting it in forLoop to x224 times
        // console.dir(cell);
        cell.id = i; // adding a unique ID to each cell so that I can use this later
        cell.classList.add('cell') // assigning a class list for styling later
        // cell.textContent = i;
        gridEl.appendChild(cell);  // appending cell to its parent of grid using variable gridEl we created earlier 

    }
    cellsEl = document.querySelectorAll('.cell'); // Stores all cells in cellsEl for easy reference, can access them later with cellsEl[index], note cellsEl is an ARRAY of DOM ELEMENTS (<div>) ( cells to be accesssed with [] )
    // console.dir(cellsEl);
}

makeGrid(); // calling the actual function tather than just declaring it 

// console.log(cellsEl)
// console.log(cellsEl[107])


// Step 2: Creating Snake 

let snakeCellsLocation = [107, 108, 109, 110]; // storing the snake as and array of indices (numbers!) rather than DOM elements 
// console.log(snakeCellsLocation)

// Step 3: showing the snake on the board:

const showSnakeCells = () => {
    snakeCellsLocation.forEach((idx) => {
        cellsEl[idx].style.backgroundColor = 'green';
    })
};
showSnakeCells();

// Step 4 - create event listeners for the 4 arrows

let direction; // global variable to track the snake movement, using let as this is currently undefined and needs to change 

document.addEventListener('keydown', (event) => {
    console.log("Key pressed:", event.key);
    if (event.key === 'ArrowUp' && direction !== 'down') direction = 'up'; // The direction !== opposite check prevents reversing directly into itself.
    else if (event.key === 'ArrowDown' && direction !== 'up') direction = 'down';
    else if (event.key === 'ArrowRight' && direction !== 'left') direction = 'right';
    else if (event.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
});


// Step 5: Moving the Snake in all directoins - add a cell to the array whilst removing a cell from the array on loop 

const makeSnakeMove = () => {
    const snakeHead = snakeCellsLocation[snakeCellsLocation.length - 1]; // grabs the last element of the snake (the head) and stores it for later use
    const headIndex = snakeHead; // alread a number so .number(value) function not needed to convert )would have been the case if it were a DOM element)
    let nextCellIndex; // will store where the snake is about to move but no value for this yet so null, defined below
    // console.log(nextCellIndex)

    if (direction === 'right') nextCellIndex = headIndex + 1; // grid math of + 1 on the index, defining nextCellIndex based on travel direction
    else if (direction === 'left') nextCellIndex = headIndex - 1; //- 1 on the index
    else if (direction === 'up') nextCellIndex = headIndex - width; // go one row up so - 15 from cellindex
    else if (direction === 'down') nextCellIndex = headIndex + width; //go one row down so +15 from cell index
    else return;

    // Determine next cell based on direction 

    const nextCell = cellsEl[nextCellIndex]; // stored cellsEl as an array (list) of grid cells, creating a variable (nextCell) as the DOM element and linking in to the next index

// Step 6 edge detection 

    if (nextCellIndex < 0) { 
        // console.log('Ive hit the top!')
        resetGame();
        return;
    } else if (nextCellIndex >= width * height) {
        // console.log('Ive hit the bottom!');
        resetGame();
        return;
    } else if (headIndex % width === 0 && direction === 'left') { // use he modulus operator to give us a remainder of 0 
        // console.log('Ive hit the left edge!')
        resetGame();
        return;
    } else if (headIndex % width === width - 1 && direction === 'right') {
        // console.log('Ive hit the right edge!')
        resetGame();
        return;
    }

// Step 7 checking for self-collision:
 
    if (snakeCellsLocation.includes(nextCellIndex)) { //use .include method - Checks if any cell’s id matches the next index.
        console.log('Ive hit myself!');
       resetGame();
        return;
    }
    // highlight the new snake head 

    else {
        // safe to move on 
        cellsEl[nextCellIndex].style.backgroundColor = 'green'; // keeps the head green
        snakeCellsLocation.push(nextCellIndex);     // pushes the index to add a new head to the snake, not tpushing he element anymore (fix)

    }

// Step 7, eating food and skipping removing the tail to allow snake to grow!!

    if (nextCellIndex === Number(foodCell.id)) { //reminder - Number(value) is a built-in JavaScript function...It takes anything that can represent a number(value) and converts it into a real number type.
        console.log('I ate the food!');
        showFood(); // calling our function here to SHOW NEW FOOD as it was "eaten"
    } else {
        const snakeTail = snakeCellsLocation.shift(); // else remove tail to maintain snake length as nothing has happened to the user
        cellsEl[snakeTail].style.backgroundColor = '';
    }
}

gameInterval = setInterval(makeSnakeMove, 200);



const showFood = () => {
    // allocate food cell a random location
    let foodCellLocation = Math.floor(Math.random() * (height * width)); // math.floor ensures a whole number not decimal
    // ensure that the food doesn't land on the snake 
    while (snakeCellsLocation.includes(foodCellLocation)) {
        foodCellLocation = Math.floor(Math.random() * (height * width));
    }
    // show this visually on the grid
    foodCell = cellsEl[foodCellLocation]; //no need for a "let foodCell" as alread have foodCell as a variable in global scope, so jsut defining it no
    // style the foor color red 
    foodCell.style.backgroundColor = "blue";
}
showFood();

const resetGame = () => {
    console.log("resetting game");

    clearInterval(gameInterval);

    gridEl.innerHTML = ''; // clear old grid
    makeGrid(); // rebuild grid
    

    snakeCellsLocation = [107, 108, 109, 110];
    direction = undefined;

    showSnakeCells();
    showFood();

    gameInterval = setInterval(makeSnakeMove, 200);

};