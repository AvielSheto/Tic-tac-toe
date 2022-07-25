# Tic Tac Toe Board

# Project Summary

In this project, we will practice vanilla Javascript DOM manipulation by creating a Tic Tac Toe game.

## Step 1

### Summary

In this step, we will create a Javascript file and connect it to our HTML file.

_Note: Review the exisiting HTML so you are familiar with the structure you are interacting with_

### Instructions

- Create a file in the `Part1` directory called `index.js`.
- Add a `script` tag at the bottom of the `body` tag and connect the `index.js` file we just created.
  - `console.log` a message to test the connection from your script file.



## Step 2

### Summary

In this step, we will reassign value of the `player` from `X` to `O` when the board is clicked. This will occur after a `player` has clicked the board to take their turn and it is then the next players turn.

### Instructions
- In index.js, create a function called `play`. We will be invoking this function any time one of 9 boxes are clicked. 
- Using the passed in parameter and `getElementById` select the box that was clicked and save it to a new variable.
- In the `play` function, using 'getElementById', select the span in the html with the id of `player`.
- Every time this function runs we will want to toggle the `X` to a `O` or vise versa to signify the next player's turn.
- At the conclusion of this step you should see that when the board is clicked, it alternates between inserting an X and an O 

<details>
<summary>
<code>Detailed Instructions</code>
</summary>

  - The first thing that we will want to do inside our `index.js` file is to make a function called `play`. This function will not take in any parameters.
  - Inside the `play` function we need to get the element in the html document that displays who's turn it currently is. Notice that in the HTML file there is a span surrounding an X with an id of `player`.
    - To select the span we will need to use `document.getElementById('player')` and store it in a variable called `playerSpan` so we can reference it later in the function.
  - Now that we have selected the span and stored it to a variable we need to toggle the text inside the html to be either `X` or `O`.
    - To do this we need to write an if statement that checks if the `playerSpan.innerText` is `===` to `X`.
    - If `playerSpan.innerText` is equal to `X` then set the the value of `playerSpan.innerText` to `O`.
    - Else, set the value of `playerSpan.innerText` to `X`, Because if it isn't `X` It should be `O`

</details>


## Step 3

### Summary

In this step, we will put either an `X` or an `O` as the content of the square that is clicked.

### Instructions
- Open `index.js`
- Add a parameter to the function `play`. The value being passed in is the id of the box that was clicked.
- Using the passed in parameter and `getElementById` select the box that was clicked and save it to a variable.
- Using that variable, set the `innerText` of the clicked element to have the value of the current player.

<details>
<summary>
<code>Detailed Instructions</code>
</summary>

- Inside of `index.js` we need to make some more changes to the `play` function.
- Change the function so that it now takes in a parameter, it can be named what ever we want, but for clarity sake lets call it `clickedId`.
- The value that gets passed in is the id of the selected element, so lets use that and `document.getElementById(clickedId)` and save it to a variable called `clickedElement`.
- Inside the if statement lets set the `clickedElement.innerText` equal to `X`. In the else clause, set it to `O`. 

</details>


## Step 4

### Summary

In this step, we will create an array that will keep track of the game's progress.

### Instructions

- Create a variable at the top of index.js, outside the `play` function, that is assigned an empty array as its value.
- In the `play` function, add the current player's value (`X` or `O`) to the array we defined above at the index of `clickedId`. 
    - ex. If the top left square was clicked by player `X`, we would expect `X` to be added to the array at index 0.
    - ex. If the very center square was clicked by player `O`, we would expect `O` to be added to the array at index 4.
	- `console.log` the array in your function to keep track of it's current value (use the inspector tool by right-clicking on the page and selecting "Inspect" to view your `console.log` in the Console tab).

<details>
<summary>
<code>Detailed Instructions</code>
</summary>

- Create a variable at the top of the document, outside the `play` function that is equal to an empty array, lets call it `board`.
  - This array will be keeping track of who played what where and eventually will be how we determine if 3 items are clicked in a row.
- In the if clause of the `play` function, set the array at the index that is the same as the `clickedId` to a string of `X`. We will do this by typing something like this `board[clickedId] = 'X'`.
- In the else clause of the `play` function, set the array at the index that is the same as the `clickedId` to a string of `O`. We will do this by typing something like this `board[clickedId] = 'O'`

</details>


## Step 5

### Summary

In this step, we will complete the logic that will determine if there is a winner, and alert that winner to the window.

### Instructions

- You will need to determine if there is a winner, and display the winning player to the screen using `window.alert`.
    - There are many different ways to accomplish this task. Think through and write out each step that is needed as an outline.
     - The most straightforward approach is to check every possible winning combination (this will require A LOT of if statements!)
- If there is no winner and the board is filled with all 9 spots taken up then alert that the game was a "CAT's" game.


<details>
<summary>
<code>Detailed Instructions</code>
</summary>

- We will need to be referencing each item of the array pretty often, so to make our typing a bit easier lets store each index of the array into its own variable.
  - This step is not needed for the function to run properly, but it will make it easier to read.
  - Lets name each square appropriately by naming each of the 9 variables based off its location in the grid. For instance `topRight`, `topCenter`, and `middleCenter`.
- We next need to check if a winner has been determined. To do that we need to check every possible winning combination. For instance if `topLeft`, `topMiddle` and `topRight` all equal each other then we know we have a winner, almost. It is possible that all 3 squares have no value so they would all equal `undefiend`, which is not a winner. Because of that we need to first check that one of the squares does not equal `undefined`.
  - It will look something like this `if (topRight !== undefined && topRight === topCenter && topRight === topRight)`
  - In the case that all 3 are the same values then we will alert the winner. We can tell who won by looking at any of the 3 values, as what those variables hold is who played in those squares.
- Finally we need to check if the board has been filled in yet. To do this we are going to write a for loop that loops exactly 9 times, and check each index of the array.
  - If any of the index of the array contains `undefined`, we know that the array is not yet full. To keep track of this we need to create a variable called `boardFull` that by default is set to true. If we ever see the value `undefined` then we need to set its value to `false`.
  - After the for loop if the value of `boardFull` is is still true we need to alert, that it was a cats game.

</details>


