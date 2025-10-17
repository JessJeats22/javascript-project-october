

// global variables 

let cellsEl; // creating this global variable to put cellsEl in the global scope to access later, essentially holding all the grid cells / array of DIVS 
let width = 15 // this will be my number of columns
let height = 15 // this will be my number of rows
let gameInterval;

// creating grid

const gridEl = document.querySelector('#grid'); // grabbing grid element/container from HTML via the DOM and storing for access 

// function to make the grid dynamically rather than hard code
const makeGrid = () => {

    const cellCount = width * height; // cellCount now equates to 225 (15x15), not harcoding cellCount so I can change size of grid dynamically 
    // console.log(cellCount)

    // forLoop to create each cell
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


// game over container & restart button 
const gameOverBox = document.querySelector('#game-over');
const restartBtn = document.querySelector('#restart-btn');

  // Instructions Toggle 
    const instructionsBtn = document.querySelector('#instructions-btn');
    const instructionsBox = document.querySelector('#instructions-box');
    const closeBtn = document.querySelector('#close-instructions');

    instructionsBtn.addEventListener('click', () => {
        console.log(instructionsBtn)
        instructionsBox.classList.toggle('hidden');
    });

    closeBtn.addEventListener('click', () => {
        instructionsBox.classList.add('hidden');
    });



// creating Snake 

let snakeCellsLocation = [107, 108, 109, 110]; // storing the snake as and array of indices (numbers!) rather than DOM elements 
// console.log(snakeCellsLocation)

// functionality to show the snake on the board:

const showSnakeCells = () => {
    snakeCellsLocation.forEach((idx) => {
        cellsEl[idx].style.backgroundColor = 'green';
    })
};

showSnakeCells(); // calling the function to display snkae on board!

// create event listeners for the 4 arrows

let direction; // global variable to track the snake movement, using let as this is currently undefined and needs to change 

document.addEventListener('keydown', (event) => {
    console.log("Key pressed:", event.key);
    if (event.key === 'ArrowUp' && direction !== 'down') direction = 'up'; // The direction !== opposite check prevents reversing directly into itself.
    else if (event.key === 'ArrowDown' && direction !== 'up') direction = 'down';
    else if (event.key === 'ArrowRight' && direction !== 'left') direction = 'right';
    else if (event.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
});


// moving the Snake in all directions and checking for all possibilities

const makeSnakeMove = () => {
    const snakeHead = snakeCellsLocation[snakeCellsLocation.length - 1]; // grabs the last element of the snake (the head) and stores it for later use
    const headIndex = snakeHead; // alread a number so .number(value) function not needed to convert )would have been the case if it were a DOM element)
    let nextCellIndex; // will store where the snake is about to move but no value for this yet so null, defined below
    // console.log(nextCellIndex)

    // determining the next cell based on direction of snkae 
    if (direction === 'right') nextCellIndex = headIndex + 1; // grid math of + 1 on the index, defining nextCellIndex based on travel direction
    else if (direction === 'left') nextCellIndex = headIndex - 1; //- 1 on the index
    else if (direction === 'up') nextCellIndex = headIndex - width; // go one row up so - 15 from cellindex
    else if (direction === 'down') nextCellIndex = headIndex + width; //go one row down so +15 from cell index
    else return;

    const nextCell = cellsEl[nextCellIndex]; // stored cellsEl as an array (list) of grid cells, creating a variable (nextCell) as the DOM element and linking in to the next index

    // if snake moves but hits edge (edge detection )

    if (nextCellIndex < 0) {
        // console.log('Ive hit the top!')
        resetGame(); // callnig my reset game function 
        return; // return here is stopping the function early if this happens 
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

    // if snake moves but hits self (checking for self-collision)

    if (snakeCellsLocation.includes(nextCellIndex)) { //use .include method - Checks if any cell’s id matches the next index.
        console.log('Ive hit myself!');
        resetGame();
        return;
    }

    // If snake just moves and all is good (safe to move on)
    cellsEl[nextCellIndex].style.backgroundColor = 'green'; // keeps the head green
    snakeCellsLocation.push(nextCellIndex);     // pushes the index to add a new head to the snake, not tpushing he element anymore (fix)



    // If snake moves and eats food (skip remvoing the tail to allow snake to grow!!)

    if (nextCellIndex === Number(foodCell.id)) { //reminder - Number(value) is a built-in JavaScript function...It takes anything that can represent a number(value) and converts it into a real number type.
        console.log('I ate the food!');
        showFood(); // calling our function here to SHOW NEW FOOD as it was "eaten"
    } else {
        const snakeTail = snakeCellsLocation.shift(); // else remove tail to maintain snake length as nothing has happened to the user
        cellsEl[snakeTail].style.backgroundColor = '';
    }
}

// forLoop/whielLoop not ossible here as it would be too fast, method is setInterval to keep the loop moving at a given pace in ms
gameInterval = setInterval(makeSnakeMove, 200);


// functino to show food and move it in random places EXCEPT where the snake already is 
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
// function to reset game including clearing the interval / having a restart button / 

const resetGame = () => {
    console.log("resetting game");

    clearInterval(gameInterval);

    gameOverBox.classList.remove('hidden');

    restartBtn.onclick = () => {

        gameOverBox.classList.add('hidden');

        gridEl.innerHTML = ''; // clear old grid
        makeGrid(); // rebuild grid


        snakeCellsLocation = [107, 108, 109, 110];
        direction = undefined;

        showSnakeCells();
        showFood();

        gameInterval = setInterval(makeSnakeMove, 200);

    };

  
}