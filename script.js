let items = document.querySelectorAll(".gameBtn");
let winner = document.querySelector(".winner");
let resetbtn = document.querySelector(".reset");
let turn = true;

let check = function () {
  let winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCombinations.length; i++) {
    if (
      items[winCombinations[i][0]].innerHTML === "X" &&
      items[winCombinations[i][1]].innerHTML === "X" &&
      items[winCombinations[i][2]].innerHTML === "X"
    ) {
      winner.innerHTML = "X";
    } else if (
      items[winCombinations[i][0]].innerHTML === "O" &&
      items[winCombinations[i][1]].innerHTML === "O" &&
      items[winCombinations[i][2]].innerHTML === "O"
    ) {
      winner.innerHTML = "O";
    } else if (
      items[0].innerHTML !== "" &&
      items[1].innerHTML !== "" &&
      items[2].innerHTML !== "" &&
      items[3].innerHTML !== "" &&
      items[4].innerHTML !== "" &&
      items[5].innerHTML !== "" &&
      items[6].innerHTML !== "" &&
      items[7].innerHTML !== "" &&
      items[8].innerHTML !== ""
    ) {
      winner.innerHTML = "Draw";
    }
  }
};

items.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(event.target.innerHTML);
    if (item.innerHTML === "") {
      if (turn) {
        event.target.innerHTML = "X";
        event.target.style.backgroundColor = "red";
      } else {
        event.target.innerHTML = "O";
        event.target.style.backgroundColor = "yellow";
      }
      turn = !turn;
      check();
    }
  });
});

let timer = setTimeout(function () {

}, 1000);
