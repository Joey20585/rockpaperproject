let scores = { human: 0, computer: 0 };

        const computerChoices = ["rock", "paper", "scissors"];

        function getComputerChoice() {
            return computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }

        function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice) {
                return "It's a tie!";
            } else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")
            ) {
                scores.human++;
                return "You win!";
            } else {
                scores.computer++;
                return "Computer wins!";
            }
        }

        function updateResults(result, humanChoice, computerChoice) {
            const resultsDiv = document.getElementById("results");
            const winnerDiv = document.getElementById("winner");
            resultsDiv.innerHTML = `
                <p>${result} (You chose ${humanChoice}, Computer chose ${computerChoice})</p>
                <p>Running Score - Human: ${scores.human}, Computer: ${scores.computer}</p>
            `;
            if (scores.human === 5 || scores.computer === 5) {
                winnerDiv.textContent = scores.human === 5 
                    ? "Congratulations! You are the overall winner!" 
                    : "Game over! The computer is the overall winner.";
                disableButtons();
            }
        }

        function disableButtons() {
            document.querySelectorAll("button").forEach(button => button.disabled = true);
        }

        document.getElementById("rock").addEventListener("click", () => {
            const computerChoice = getComputerChoice();
            const result = playRound("rock", computerChoice);
            updateResults(result, "rock", computerChoice);
        });

        document.getElementById("paper").addEventListener("click", () => {
            const computerChoice = getComputerChoice();
            const result = playRound("paper", computerChoice);
            updateResults(result, "paper", computerChoice);
        });

        document.getElementById("scissors").addEventListener("click", () => {
            const computerChoice = getComputerChoice();
            const result = playRound("scissors", computerChoice);
            updateResults(result, "scissors", computerChoice);
        });
