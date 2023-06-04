const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;


options.forEach((option) => {
    option.addEventListener("click", function () {
        const pInput = this.value;

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        updateMoves(pInput, cInput);
        compareInputs(pInput, cInput);
        updateScore();
        if (checkWinner()) {
            pScore = cScore = 0;
            updateScore();
        }
    });
});

function updateMoves(pInput, cInput) {
    document.getElementById("p-move").src = `${pInput}.jpg`;
    document.getElementById("c-move").src = `${cInput}.jpg`;
  }

function compareInputs(pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`;
    if (pInput === cInput) {
        alert(`${currentMatch} is a Tie`);
        return;
    }

    if (pInput === "Rock") {
        if (cInput === "Scissors") {
            alert(`${currentMatch} = You Win`);
            pScore++;
        } else {
            alert(`${currentMatch} = Computer Wins`);
            cScore++;
        }
    }

    else if (pInput === "Paper") {
        if (cInput === "Rock") {
            alert(`${currentMatch} = You Win`);
            pScore++;
        } else {
            alert(`${currentMatch} = Computer Wins`);
            cScore++;
        }
    }
    
    else {
        if (cInput === "Paper") {
            alert(`${currentMatch} = You Win`);
            pScore++;
        } else {
            alert(`${currentMatch} = Computer Wins`);
            cScore++;
        }
    }
}

function updateScore() {
    document.getElementById("p-score").textContent = pScore;
    document.getElementById("c-score").textContent = cScore;
}

function checkWinner() {
    if (pScore === 3 || cScore === 3) {
        const winner =
            pScore === 3
                ? "You win the game! Congratulations!"
                : "Computer wins the game! Try again next time!";
        alert(winner);
        return true;
    }
    return false;
}
