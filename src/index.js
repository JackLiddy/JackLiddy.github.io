import "./styles.css";

const quizContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
// nextButton.style.display = "none";

let currentQuestionIndex = 0;

const questions = [
  {
    question:
      "What could reduce seizures in children with medically resistant focal epilepsy receiving standard care?",
    answers: ["Good", "Great"],
    correctAnswer: "Good"
  },
  {
    question:
      "Does cognitive behavioral therapy reduce self-reported anxiety symptoms more effectively than selective serotonin-reuptake inhibitors in adolescents?",
    answers: ["Good", "Great"],
    correctAnswer: "Great"
  },
  {
    question:
      "In adult smokers, how does nicotine replacement therapy compare to behavioral therapy?",
    answers: ["Good", "Great"],
    correctAnswer: "Good"
  }
];

nextButton.addEventListener("click", () => {
  const selectedAnswerElement = document.querySelector(
    'input[name="answer"]:checked'
  );
  if (!selectedAnswerElement) {
    // Handle the case when the user hasn't selected an answer
    alert("Please select an answer before proceeding.");
    return;
  }
  console.log(selectedAnswerElement); // remove

  const userAnswer = selectedAnswerElement.value;
  const currentQuestion = questions[currentQuestionIndex];

  if (userAnswer === currentQuestion.correctAnswer) {
    // Handle the case when the user's answer is correct
    console.log("Correct!");
  } else {
    // Handle the case when the user's answer is incorrect
    console.log("Incorrect!");
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    // restartButton.style.display = "none"; //fires on every question - fix
  } else {
    quizContainer.innerHTML = "<h2>You finished the quiz!</h2>";
    nextButton.style.display = "none";
    restartButton.style.display = "block";
  }
});

restartButton.addEventListener("click", () => {
  // currentQuestionIndex = 0;
  location.reload();
});

function showQuestion() {
  const question = questions[currentQuestionIndex];
  quizContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.answers
          .map(
            (answer, index) => `
            <div>
                <input type="radio" id="answer${index}" name="answer" value="${answer}">
                <label for="answer${index}">${answer}</label>
            </div>
        `
          )
          .join("")}
    `;
}

showQuestion();
