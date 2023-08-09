var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".scoreboard");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissors_div = document.getElementById("scissors");
function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomNumber = Math.floor((Math.random() * 3));
    return choices[randomNumber];
}
function win(userChoice, computerChoice) {
    var userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = String(userScore);
    computerScore_span.innerHTML = String(computerScore);
    result_p.innerHTML = "".concat(userChoice, " beats ").concat(computerChoice, ". You win!");
    userChoice_div.classList.add("green-glow");
    setTimeout(function () { return userChoice_div.classList.remove("green-glow"); }, 250);
}
function lose(userChoice, computerChoice) {
    var userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = String(userScore);
    computerScore_span.innerHTML = String(computerScore);
    result_p.innerHTML = result_p.innerHTML = "".concat(userChoice, " loses to ").concat(computerChoice, ". You lose!");
    userChoice_div.classList.add("red-glow");
    setTimeout(function () { return userChoice_div.classList.remove("red-glow"); }, 250);
}
function draw(userChoice, computerChoice) {
    var userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = String(userScore);
    computerScore_span.innerHTML = String(computerScore);
    result_p.innerHTML = result_p.innerHTML = "".concat(userChoice, " equals ").concat(computerChoice, ". It's a draw!");
    userChoice_div.classList.add("gray-glow");
    setTimeout(function () { return userChoice_div.classList.remove("gray-glow"); }, 250);
}
function game(userChoice) {
    var computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "paperrock":
        case "scissorspaper":
        case "scissorsrock":
            win(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}
function main() {
    rock_div.addEventListener("click", function () {
        game("rock");
    });
    paper_div.addEventListener("click", function () {
        game("paper");
    });
    scissors_div.addEventListener("click", function () {
        game("scissors");
    });
}
main();
