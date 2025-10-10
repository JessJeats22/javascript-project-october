


// 1. Create high level visuals for a landing page:
    // - Use HTML to add a heading of "Snake Game"
    // - Use HTML to add a button for "instructions"
    // - Use HTML to add a message saying "press an arrow to start game"
    // - Use HTML + CSS to create a grid 15x15 (grid + cells)
    // - Use CSS for basic styling of HTML elements
    // - Use HTMl for food img (source, add to assets, give an id and link to assets in HTML)

    // COME BACK TO:
    // - Use HTML to create a banner for highest score 
    // - Use HTML to add a button for "play again"
    // - Use HTML to create an image of a medal (source image and add to assets)

// 2. Cached Elements
    // Use querySelector method to cache/store HTML elements (classes & IDs) including:
        // - const namingConvention and use querySelector + Button Instructions (id), Grid (class), Cells (id), food image

// 3. Place the snake and food element on grid
    // Place them both on the board in specfic cells (mid way in the grid()
      // Link snake and food to grid cells 
    // Place FOOD on board
        // Connect food to a cell (let food = variable + document + getElementByID)
    // Place SNAKE on board 
        // Create a variable for snake (let snake = array method  )
        // Use array method to build snake using cells to define how big it is
        // Source an image of a snake and add it to "assets" (saving it as a PNG)
    
// 3. Intialise game
    // Create and define an an Initilaise function including adding the "starter conditions"
         // Set Score to zero (let variable)
         // Add snake functiin
         // Add food function

// 4. Make the snake move
    // Requires a snake move arrow function
        // const = handleMove + arrow function 
    // To define direction of snake, add x4 event listeners to each of the arrow keys (GROUP THESE - Noa to check )
        // when arrow is clicked, snake moves
    // function to make snake move
        // not sure what method to use to make a snake move 
    // Set pace at which the snake will move 
        // use Time method?


// 5. Make food disappear
    //  As the snake enters into a cell with the food, make the food disappear 
        // when cell === event.target then remove from cell (similar syntax to this)

// 6. Make new food pop up at random on the grid 
    // Use Math. function to help make the food appear in a random square
    // make sure food doesn't appear on a cell with the snake in 

// 7. Snake gets bigger
        // .push method for arrays


// 8. Define game end parameters with a Game end function
    // Funcition
        // use grid parameters to create a wall
        // use body
    // If statement will say:
        // if snake hits wall (grid parameter) =  end game
        // if snake hits itself (not sure how to define this yet) = end game
        // else continue

// 8. Game ends - WITH high score (PUT TO LEVEL UP)
        // show message to say game has ended 
            // const variable
        // show score based on amount of food eaten 
            // let varibale
        // if highest score, show congratulations banner 

// 9. if game ends with not high score
    // requires a score function 
    // show message to say game has ended 
            // const variableshow score
    // show score based on amount of food eaten 
            // let varibale
    // show "play again" button 

// 10. Level up
     // Sounds
         // Source an "eating" sound and add it to "assets" (saving it as a .wav)
         // Source a "crash" sound and add it to "assets" (saving it as a .wav)



// varaibles:
// - score (amount of food eaten)
// - snake (size will change)


// functions (doing things)
    // game is being initiated
    // snake is moving 
    // apple is moving 
    // scores are being kept
    // victor banner is being shown
