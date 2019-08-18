// javascript

let userScore = 0;
let compScore = 0;
const userScore_div = document.querySelector(".user_score");
const compScore_div = document.querySelector(".comp_score");
const result_div = document.querySelector(".result p");
const rock = document.getElementById("r");
const scissors = document.getElementById("s");
const paper = document.getElementById("p");

function computerChoice() {
  let choices = ["r", "s", "p"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

rock.addEventListener("click", function() {
  game("r");
});

scissors.addEventListener("click", function() {
  game("s");
});

paper.addEventListener("click", function() {
  game("p");
});

function convertToWord(choice) {
  if (choice == "r") return "Rock";
  if (choice == "s") return "Scissors";
  return "Paper";
}

function game(userChoice) {
  let computer = computerChoice();

  switch (userChoice + computer) {
    case "sp":
    case "pr":
    case "rs":
      win(userChoice, computer);
      break;
    case "ps":
    case "rp":
    case "sr":
      lose(userChoice, computer);
      break;
    case "ss":
    case "rr":
    case "pp":
      draw(userChoice, computer);
      break;
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_div.innerHTML = userScore;
  result_div.innerHTML = `${convertToWord(
    userChoice
  )}(user) beats ${convertToWord(computerChoice)}(comp). You win!`;
  const selection = document.getElementById(userChoice);
  selection.classList.add("green-glow");
  setTimeout(() => {
    selection.classList.remove("green-glow");
  }, 300);
}

function lose(userChoice, computerChoice) {
  compScore++;
  compScore_div.innerHTML = compScore;
  result_div.innerHTML = `${convertToWord(
    userChoice
  )}(user) beats ${convertToWord(computerChoice)}(comp). You lose!`;
  const selection = document.getElementById(userChoice);
  selection.classList.add("red-glow");
  setTimeout(() => {
    selection.classList.remove("red-glow");
  }, 300);
}

function draw(userChoice, computerChoice) {
  result_div.innerHTML = `${convertToWord(
    userChoice
  )} (user)ties ${convertToWord(computerChoice)}(comp). Draw!`;
  const selection = document.getElementById(userChoice);
  selection.classList.add("gray-glow");
  setTimeout(() => {
    selection.classList.remove("gray-glow");
  }, 300);
}
