let userScore: number = 0;
let computerScore: number = 0;
const userScore_span: HTMLElement = document.getElementById("user-score");
const computerScore_span: HTMLElement = document.getElementById("computer-score");
const scoreBoard_div: HTMLElement = document.querySelector(".scoreboard");
const result_p: HTMLElement = document.querySelector(".result > p");
const rock_div: HTMLElement = document.getElementById("rock");
const paper_div: HTMLElement = document.getElementById("paper");
const scissors_div: HTMLElement = document.getElementById("scissors");

function getComputerChoice():string{
    const choices:string[] = ["rock", "paper", "scissors"];
    const randomNumber:number = Math.floor((Math.random()*3));
    return choices[randomNumber]
}

function win(userChoice:string , computerChoice:string){
    const userChoice_div:HTMLElement = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = String(userScore);
    computerScore_span.innerHTML = String(computerScore);
    result_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() =>  userChoice_div.classList.remove("green-glow"), 250);
}

function lose(userChoice:string , computerChoice:string){
    const userChoice_div:HTMLElement = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = String(userScore);
    computerScore_span.innerHTML = String(computerScore)
    result_p.innerHTML = result_p.innerHTML = `${userChoice} loses to ${computerChoice}. You lose!`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 250);
}

function draw(userChoice:string , computerChoice:string){
    const userChoice_div:HTMLElement = document.getElementById(userChoice);
    userScore_span.innerHTML = String(userScore);
    computerScore_span.innerHTML = String(computerScore)
    result_p.innerHTML = result_p.innerHTML = `${userChoice} equals ${computerChoice}. It's a draw!`;
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 250);
}
function game(userChoice: string){
    const computerChoice: string = getComputerChoice();

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

function main(){
    rock_div.addEventListener("click", () => {
        game("rock");
    })

    paper_div.addEventListener("click", () =>  {
        game("paper");
    })

    scissors_div.addEventListener("click", () =>  {
        game("scissors");
    })
}

main();