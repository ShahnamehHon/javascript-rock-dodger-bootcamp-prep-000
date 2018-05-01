const DODGER = document.getElementById('dodger');
const GAME = document.getElementById('game');
const GAME_HEIGHT = 400;
const GAME_WIDTH = 400;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const ROCKS = [];
const START = document.getElementById('start');

var gameInterval = null;

function checkCollision(rock) {
 
   const top = positionToInteger(rock.style.top);

  if (top > 360) {
const dodgerLeftEdge = positionToInteger(DODGER.style.left);

const dodgerRightEdge = positionToInteger(DODGER.style.right) + 40;

const rockLeftEdge = positionToInteger(rock.style.left);

const rockRightEdge = positionToInteger(rock.style.right) + 20;

 if (rockLeftEdge < dodgerLeftEdge && rockRightEdge >        dodgerLeftEdge ||
          rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge ||
                rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge) {
      return true;
    }
  }
}

function createRock(x) {
  const rock = document.createElement('div');

  rock.className = 'rock';
  rock.style.left = `${x}px`;

 
  var top = 0;

  rock.style.top = top;

   GAME.appendChild(rock);
 
   window.requestAnimationFrame(moveRock);

  function moveRock() {
   if (checkCollision(rock)) {
            endGame();
        }

   if (rock.style.top < 356) {
          moveRock();
       }

   if (rock.style.top >= 360) {

        }
    }
  
moveRock();
  
  ROCKS.push(rock);

  return rock;
}


function endGame() {
   window.clearInterval(gameInterval);
   window.removeEventListener('keydown', moveDodger);
   alert('YOU LOSE!');
}

function moveDodger(e) {
 switch (e.which) {
        case LEFT_ARROW:
            e.preventDefault();
            e.stopPropagation();
            moveDodgerLeft();
            break;
        case RIGHT_ARROW:
            e.preventDefault();
            moveDodgerRight();
            break;
    }
}


function moveDodgerLeft() {
window.requestAnimationFrame(function () {
if (positionToInteger(DODGER.style.left) >= 4)

DODGER.style.left = `${positionToInteger(DODGER.style.left) - 4}px`
    });
}

function moveDodgerRight() {
  // implement me!
  /**
   * This function should move DODGER to the right
   * (mabye 4 pixels?). Use window.requestAnimationFrame()!
   */
}

/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function start() {
  window.addEventListener('keydown', moveDodger)

  START.style.display = 'none'

  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  }, 1000)
}
