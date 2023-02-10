let input = document.querySelector(".field__form__input");
let btn = document.querySelector(".field__form__btn");
let check = document.querySelector(".result__check__out");
let help = document.querySelector(".result__help__out");
let count = document.querySelector(".result__count__out");
let choice1 = document.querySelector(".choice1");
let choice2 = document.querySelector(".choice2");
let contDiv = document.querySelector(".container1");
let contDiv2 = document.querySelector(".container2");
let divPers = document.querySelector(".pers");
let imgBoom = document.querySelectorAll(".boom");
let boomArr = Array.from(imgBoom);
let chel = document.querySelector("img#chel");
let arrowImg = document.querySelector(".arrowImg");
let textPers = document.querySelector(".textPers");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let btnBingo = document.querySelector("#bingo");
let divCon2 = document.querySelector(".canvas2");
let body = document.querySelector("body");
let armagedon = document.querySelector(".armagedon");
let p3 = document.querySelector("#p3");
let startButton = document.querySelector("#startButton");

startButton.addEventListener("click", () => {
  startButton.style.display = "none"
}



);


arrowImg.addEventListener(
  "click",
  (changeText = () => {
    // p1.style.opacity = "0";
    // p2.style.opacity = "1";
    p1.style.display = "none";
    p2.style.display = "block";
    arrowImg.style.display = "none";
  })
);

let item = 0;
let randNum = 1 + Math.floor(Math.random() * 100);
let userNum;

function guessNumber() {
  userNum = input.value;
  console.log(userNum, randNum);

  if (userNum > randNum) {
    check.textContent = "You didn't guess";
    help.textContent = "Too much.";
    item++;
    count.textContent = item;
  } else if (userNum < randNum) {
    check.textContent = "You didn't guess";
    help.textContent = "Too little";
    item++;
    count.textContent = item;
  } else {
    check.textContent = "Congratulations! You guessed the number";
    help.textContent = "Just right";
    item++;
    count.textContent = item;
    chel.classList.add("dissapears");
    let countI = 0;
    const interv = setInterval(() => {
      //   boomArr.forEach((boom) => {
      //     boom.classList.remove("hidden2");
      //     boomArr.shift();
      //   });
      // }, 1000);
      if (countI == 4) {
        clearInterval(interv);
      } else {
        boomArr[0].classList.remove("hidden2");
        boomArr.shift();
        countI++;
      }
    }, 400);
    //     setTimeout(() => {
    //       for (let i = 0; i < imgBoom.length; i++) {
    //         imgBoom[i].classList.remove("hidden2");
    //         console.log(i);
    //       }
    //     }, 1000);
    //   }
  }
}

btn.addEventListener("click", guessNumber);

const showgame = () => {
  contDiv.classList.remove("hidden");
  contDiv2.classList.add("hidden");
  choice2.style.display = "none";
  
};

const showgame2 = () => {
  contDiv2.classList.remove("hidden");
  contDiv.classList.add("hidden");
  choice1.style.display = "none";
  
};
choice1.addEventListener("click", showgame);
choice2.addEventListener("click", showgame2);

const divSizeOut = () => {
  divPers.style.paddingTop = "10px";
};
choice1.addEventListener("click", divSizeOut);
choice2.addEventListener("click", divSizeOut);

var min = 0;
var max = 100;

var middle = Math.floor((min + max) / 2);

var stage = 1;

function start() {
  document.getElementById("startText").classList.add("notOnScreen");
  document.getElementById("startButton").classList.add("notOnScreen");

  document.getElementById("question").classList.remove("notOnScreen");
  document.getElementById("question").innerHTML =
    "attempt " + stage + ": " + middle;

  document.getElementById("small").classList.remove("notOnScreen");
  document.getElementById("bingo").classList.remove("notOnScreen");
  document.getElementById("big").classList.remove("notOnScreen");
}

function smallClick() {
  max = middle;

  middle = Math.floor((min + max) / 2);

  if (max == middle) {
    middle -= 1;
  }

  checkGame();
}

function bigClick() {
  min = middle;

  middle = Math.floor((min + max) / 2);

  if (min == middle) {
    middle += 1;
  }

  checkGame();
}

function bingoClick() {
  max = middle;
  min = middle;

  checkGame();
}

function checkGame() {
  if (min == max) {
    document.getElementById("question").innerHTML =
      "You have made a number " + min;

    document.getElementById("small").classList.add("notOnScreen");
    document.getElementById("bingo").classList.add("notOnScreen");
    document.getElementById("big").classList.add("notOnScreen");

    return;
  }

  stage += 1;
  if (stage == 8) {
    document.getElementById("question").innerHTML = "Cheating is not good!";
  }

  document.getElementById("question").innerHTML =
    "attempt " + stage + ": " + middle;
}

btnBingo.addEventListener("click", () => {
 p3.style.display = "block";
  setInterval(() => {
    body.style.backgroundImage = "url(" +  armagedon + ")";
    body.style.background = "black";

    divCon2.style.display = "none";
  divPers.style.display = "none";
    armagedon.style.display = "block";
  }, 2000);
  
});




