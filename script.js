const allSvgs = document.querySelectorAll("svg");
const allAnswers = document.querySelectorAll(".answer");
const allQuestions = document.querySelector(".question");
const form = document.getElementById("myForm");
const emailInput = document.querySelector("input");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".links");
const icon = document.querySelector(".icon");
const simpleBtn = document.querySelector(".simple_bookmarking");
const speedBtn = document.querySelector(".speedy_searching");
const easyBtn = document.querySelector(".easy_sharing");
const simple = document.querySelector(".simple");
const speed = document.querySelector(".speed");
const easy = document.querySelector(".easy");
let isFlipped = false;

allSvgs.forEach((svg) => {
  svg.addEventListener("click", () => {
    if (isFlipped) {
      svg.style.transform = "none";
      isFlipped = false;
    } else {
      svg.style.transform = "rotate(180deg)";
      isFlipped = true;
    }
    const parentDiv = svg.parentNode;
    const answer = parentDiv.querySelector(".answer");
    answer.classList.toggle("none");
  });
});

hamburger.addEventListener("click", function () {
  menu.classList.add("active");
});

icon.addEventListener("click", () => {
  menu.classList.remove("active");
});

simpleBtn.addEventListener("click", () => {
  simple.classList.remove("none");
  speed.classList.add("none");
  easy.classList.add("none");
});
speedBtn.addEventListener("click", () => {
  simple.classList.add("none");
  speed.classList.remove("none");
  easy.classList.add("none");
});
easyBtn.addEventListener("click", () => {
  simple.classList.add("none");
  speed.classList.add("none");
  easy.classList.remove("none");
});
