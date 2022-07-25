var board = [];
function play(clickedId) {
  var playerSpan = document.getElementById("player");
  var clickedElement = document.getElementById(clickedId);
  if (playerSpan.innerText === "x") {
    playerSpan.innerText = "o";
    clickedElement.innerText = "x";
    board[clickedId] = "x";
  } else {
    playerSpan.innerText = "x";
    clickedElement.innerText = "o";
    board[clickedId] = "o";
  }

  var topLeft = board[0],
    topCenter = board[1],
    topRight = board[2],
    middleLeft = board[3],
    middleCenter = board[4],
    middleRight = board[5],
    bottomLeft = board[6],
    bottomCenter = board[7],
    bottomRight = board[8];

  // winning
  // row
  // row top
  if (
    topRight !== undefined &&
    topRight === topCenter &&
    topCenter === topLeft
  ) {
    window.alert("player " + board[clickedId] + " winning");
    reset();
    // row center
  }
  if (
    middleRight !== undefined &&
    middleRight === middleCenter &&
    middleCenter === middleLeft
  ) {
    window.alert("player " + board[clickedId] + " winning");
    reset();
  }
  // row bottom
  if (
    bottomRight !== undefined &&
    bottomRight === bottomCenter &&
    bottomCenter === bottomLeft
  ) {
    window.alert("player " + board[clickedId] + " winning");
    reset();
  }
  // column
  // column right
  if (
    topRight !== undefined &&
    topRight === middleRight &&
    middleRight === bottomRight
  ) {
    window.alert("player " + board[clickedId] + " winning");
    reset();
  }
  // column center
  if (
    topCenter !== undefined &&
    topCenter === middleCenter &&
    middleCenter === bottomCenter
  ) {
    window.alert("player " + board[clickedId] + " winning");
    reset();
  }
  // column left
  if (
    topLeft !== undefined &&
    topLeft === middleLeft &&
    middleLeft === bottomLeft
  ) {
    window.alert("player " + board[clickedId] + " winning");
    reset();
  }
  // diagonal
  // diagonal right
  if (
    topLeft !== undefined &&
    topLeft === middleCenter &&
    middleCenter === bottomRight
  ) {
    window.alert("player " + board[clickedId] + " winning");
    reset();
  }
  // diagonal left
  if (
    topRight !== undefined &&
    topRight === middleCenter &&
    middleCenter === bottomLeft
  ) {
    window.alert("player " + board[clickedId] + " winning");
    reset();
  }

  var boardFull = true;
  if (
    topLeft == undefined ||
    topCenter == undefined ||
    topRight == undefined ||
    middleLeft == undefined ||
    middleCenter == undefined ||
    middleRight == undefined ||
    bottomLeft == undefined ||
    bottomCenter == undefined ||
    bottomRight == undefined
  ) {
    boardFull = false;
  } else {
    window.alert("CATS GAME");
    reset();
    
  }
  function reset() {
    window.location = window.location.href;
  }
}
