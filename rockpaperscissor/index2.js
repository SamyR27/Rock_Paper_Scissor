const options = document.querySelectorAll(".options")
let pscore = 0;
let cscore = 0;

options.forEach((option) => {
    option.addEventListener("click", function () {
        const pInput = this.textContent;

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];
        updateMoves(pInput, cInput);
        compareInputs(pInput, cInput);
        updatescore()
        if (checkwinner()) {
            pscore = cscore = 0;
            updatescore();
        }
    });
});

function compareInputs() {
    const currentmatch = `${pInput} vs ${cInput}`;
    if (pInput === cInput) {
        alert(`${currentmatch} is a tie`);
        return;
    }

    if (pInput === "Rock") {

        if (cInput === "Scissors") {
            alert(`${currentmatch} = you win`)
            pscore++;
        } else {
            alert(`${currentmatch} = Computer Wins`);
            cscore++;
        }
    }

    else if (pInput === "Paper") {if (cInput === "Rock") {
            alert(`${currentmatch} = you win`)
            pscore++;
        } else {
            alert(`${currentmatch} = Computer Wins`);
            cscore++;
        }
    }

    else {
        if (cInput === "Paper") {
            alert(`${currentmatch} = You Win`);
            pscore++;
        } else {
            alert(`${currentmatch} = Computer Wins`);
            cscore++;
        }
    }
}

function updatescore() {
    document.getElementById("p-score").textContent = pscore;
    document.getElementById("c-score").textContent = cscore;
}

function checkwinner() {
    if (pscore === 3 || cscore === 3) {
        const winner =
            pscore === 3
                ? "you won, Congratulations"
                : "you lost, better luck next time";
        alert(winner);
        return true;
    }
    return false;
}