const quizForm = document.querySelector("#quiz-form");
const submitAnsBtn = document.querySelector("#submit-ans-btn");
const outputA1 = document.querySelector("#output");

const correctAnswers = [
  "90",
  "right angled",
  "180 degrees",
  "equilateral",
  "edges",
];  
submitAnsBtn.addEventListener("click", calculateScore);

function calculateScore() {
  let score = 0;
  index = 0;
  const formResult = new FormData(quizForm);
  console.log(formResult);
  for (let value of formResult.values()) {
    if (value === correctAnswers[index]) {
        console.log(value,correctAnswers[index])
      score = score + 1;
    }
    index = index + 1;
  }
  outputA1.innerText = "The score is " + score;
}
