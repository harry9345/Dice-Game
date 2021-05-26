let rollBtn = document.getElementById("rollBtn");
let rollAgainBtn = document.getElementById("rollAgainBtn");
let timerSpan = document.getElementById("timer");
let userScrore = document.getElementById("userScore");
let systemScore = document.getElementById("systemScore");
let result = document.getElementById("result");

let dice = [1, 2, 3, 4, 5, 6];
let UserDice = [];
let systemDice = [];
let diceNumber = null;
var userSum = null;
var systemSum = null;

rollBtn.addEventListener("click", rollingDice);
rollAgainBtn.addEventListener("click", rollAgain);

function rollingDice() {
  diceNumber = dice[Math.floor(Math.random() * dice.length)];
  UserDice.push(diceNumber);
  diceNumber = dice[Math.floor(Math.random() * dice.length)];
  systemDice.push(diceNumber);
  console.log("user : " + UserDice);
  console.log("system : " + systemDice);
  if (UserDice.length >= 6 || systemDice.length >= 6) {
    userSum = UserDice.reduce((a, b) => a + b);
    systemSum = systemDice.reduce((a, b) => a + b);
    userScrore.innerText = userSum;
    systemScore.innerText = systemSum;
    rollBtn.disabled = true;
    rollAgainBtn.disabled = false;
    if (userSum > systemSum) {
      result.innerText = `Congrats you win ${userSum}`;
    } else {
      result.innerText = ` system wins this round ${systemSum}`;
    }
  }
}

function rollAgain() {
  UserDice = [];
  systemDice = [];
  diceNumber = null;
  userSum = null;
  systemSum = null;
  userScrore.innerText = "";
  systemScore.innerText = "";
  result.innerText = "";
  rollBtn.disabled = false;
  rollAgainBtn.disabled = true;
}
