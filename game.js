var prompt = require('sync-prompt').prompt;


function between(x, min, max) {
  return min <= x && x <= max;
}

var userMoney = 5;
var play = true;

function placeBet(){
  var bet = prompt("Place a bet between $5 - $10: ");
  var number = Math.floor(Math.random() * 10) + 1;

  console.log(bet)
  if (between(bet, 5, 10)){
    var guess = prompt("Guess something: ")
    // if (between(guess, 1, 10)){
      if (guess == number) { 
        userMoney = userMoney + bet; 
        console.log("You now have" + userMoney);
      } else if (guess == number - 1 || guess == number + 1) { userMoney = userMoney; 
        console.log ("You now have " + userMoney);
      } else { 
        userMoney = userMoney - bet; 
        console.log ("You now have " + userMoney);
      };
  } else console.log("You did not place a bet between $5 - $10")
}

do {
  placeBet();

  if (userMoney < 5) {
    var check = prompt('Game Over. Continue?: ');

    if (check === 'n') {
      play = false;
    }

    userMoney = 100;
  }
} while (userMoney > 0 && play)
