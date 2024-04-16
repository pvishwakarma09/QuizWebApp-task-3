let popUp = prompt("Please Enter Your  Name");

const quizData = [
  {
    question: "1.) What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Markup Language",
      "Hyperlink Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "2.) What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Custom Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "3.) Which programming language is mainly used for adding interactivity to websites?",
    options: ["HTML", "CSS", " Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question:
      "4.) Which part of web development is responsible for handling data storage and retrieval?",
    options: [
      "Front-end development",
      "Back-end development",
      "Full-stack development",
      "Middleware development",
    ],
    answer: "Back-end development",
  },
  {
    question:
      "5.) What is the primary function of a web server in the context of web development?",
    options: [
      "Rendering web pages on the client’s browser",
      "Executing JavaScript code",
      "Storing user data",
      "Handling HTTP requests and serving web pages",
    ],
    answer: "Handling HTTP requests and serving web pages",
  },
  {
    question:
      "6.) Which of the following is not a back-end programming language commonly used in web development?",
    options: ["PHP", "Ruby", "HTML", "Java"],
    answer: "HTML",
  },
  {
    question: "7.) What is the purpose of the script tag in HTML?",
    options: [
      "To define the page’s structure",
      "To include external CSS styles",
      "To include external JavaScript ",
      "To create hyperlinks",
    ],
    answer: "To include external JavaScript code",
  },
  {
    question:
      "8.) What is the correct syntax for creating a CSS class called “highlight” with a red text color?",
    options: [
      ".highlight {color: red; }",
      "highlight {text-color: red; }",
      "highlight {color: red; }",
      ".highlight {text-color: red; }",
    ],
    answer: ".highlight {color: red; }",
  },
  {
    question: "9.) Which HTML tag is used to create a hyperlink?",
    options: ["{a}", "{link}", "{h1}", "{p}"],
    answer: "{a}",
  },
  {
    question:
      "10.)Which of the following is a server-side scripting language commonly used for web development?",
    options: ["HTML", "CSS", "Python", "JavaScript"],
    answer: "Python",
  },
  {
    question:
      "11.) Which CSS property is used to change the font size of text?",
    options: ["font-size", "text-size", "font-style", "text-style"],
    answer: "font-size",
  },
  {
    question:
      "12.) Which JavaScript function is used to change the content of an HTML element?",
    options: ["modify()", "change()", "update()", "innerHTML()"],
    answer: "innerHTML()",
  },
  {
    question:
      "13.) Which HTTP method is typically used to retrieve data from a web server?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "GET",
  },
  {
    question:
      "14.) Which of the following is an example of a front-end web development framework/library?",
    options: ["Express.js", "Django", "Flask", "React.js"],
    answer: "React.js",
  },
  {
    question:
      "15.) Which HTML tag is used to define a table in web development?",
    options: ["{div}", "{table}", "{form}", "{img}"],
    answer: "{table}",
  },
  {
    question:
      "16.) Which CSS property is used to create rounded corners for an HTML element?",
    options: [
      "rounded-corners",
      "corner-radius",
      "border-radius",
      "box-radius",
    ],
    answer: "border-radius",
  },
  {
    question:
      "17.) Representational State Transfer20. Which of the following is used to store and query data in a tabular format in web development?",
    options: ["Database", "API", "JSON", "XML"],
    answer: "Database",
  },
  {
    question:
      "18.) Which HTTP method is typically used to retrieve data from a web server?",
    options: [
      "Representational State Transfer",
      "Real-time Server Technology",
      "Responsive Elements for Seamless Transition",
      "Readable Element Style Transfer",
    ],
    answer: "Representational State Transfer",
  },
  {
    question:
      "19.) Which of the following is a popular front-end development framework maintained by Google?",
    options: ["React", "Angular", "Vue.js", "Django"],
    answer: "Angular",
  },
  {
    question:
      "20.) Which CSS property is used to control the spacing between elements in a layout?",
    options: ["padding", "margin", "spacing", "border"],
    answer: "margin",
  },
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");
const retryButton = document.getElementById("retry");
const showAnswerButton = document.getElementById("showAnswer");

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement("div");
  questionElement.className = "question";
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement("div");
  optionsElement.className = "options";

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement("label");
    option.className = "option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz";
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = "";
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = "none";
  submitButton.style.display = "none";
  retryButton.style.display = "inline-block";
  showAnswerButton.style.display = "inline-block";
  resultContainer.innerHTML = `You Scored ${score} Out of ${quizData.length} !`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = "block";
  submitButton.style.display = "inline-block";
  retryButton.style.display = "none";
  showAnswerButton.style.display = "none";
  resultContainer.innerHTML = "";
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = "none";
  submitButton.style.display = "none";
  retryButton.style.display = "inline-block";
  showAnswerButton.style.display = "none";

  let incorrectAnswersHtml = "";
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
  }

  resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
}

submitButton.addEventListener("click", checkAnswer);
retryButton.addEventListener("click", retryQuiz);
showAnswerButton.addEventListener("click", showAnswer);

displayQuestion();
