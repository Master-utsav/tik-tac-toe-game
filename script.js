let boxes = document.querySelectorAll(".boxes");
let newbtn = document.querySelector("#new-btn");
let resetbtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#title");
let turn0 = true;
let count = 0;

// add new feauture later: ki game box main jate hi cursor par agar 0 ki turn hai to cursor par ek zero ka div stick hona chiaye aur click karte hi vo div button click wale function ko call karde
const winCase = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [6, 7, 8],
    [1, 4, 7],
    [3, 4, 5],
    [2, 5, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
            
        }
        count++;
        box.disabled = true;
        checkWinner();
    });
});

const newGame = () => {
    turn0 = true;
    enableBoxes();
    msg.classList.add("hidden");
    count = 0;
    resetbtn.classList.remove("hidden");
    newbtn.classList.add("hidden");

}

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    count = 0;
    msg.classList.add("hidden");
}


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is : ${winner}`;
    msg.classList.remove("hidden");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winCase) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3 ) {
                showWinner(pos1);
                newbtn.classList.remove("hidden");
                resetbtn.classList.add("hidden");
            }
            else if (pos1 === pos2 && pos2 === pos3 && count === 9) {
                showWinner(pos1);
                newbtn.classList.remove("hidden");
                resetbtn.classList.add("hidden");
            }
            else if(count === 9) {
            msg.innerText = `Play again match is DRAW`;
            msg.classList.remove("hidden");
            newbtn.classList.remove("hidden");
            resetbtn.classList.add("hidden");
            }
        }
      
    }
}

resetbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", newGame);




