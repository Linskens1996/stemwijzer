var noDisplay = "display:none;",
    yesDisplay = "display:block",
    idIntro = document.getElementById("intro"), // white background div
    idStemmenTracker = document.getElementById("stemmen-tracker"), // gray background div
    idDivBlue = document.getElementById("div-blue"), // blue background div
    idQuestion = document.getElementById("question"), // white background div with question
    idQuestionHeader = document.getElementById("questionHeader"), // h1 question header blue
    idQuestionVraag = document.getElementById("questionVraag"), // p question vraag
    idGoBack = document.getElementById("goBack"), // go back button
    answers = [], // answers array
    i = 0;

function startQuiz() {
  idIntro.style = noDisplay;
  idStemmenTracker.style = noDisplay;
  idDivBlue.style = noDisplay;
  idQuestion.style = yesDisplay;

  idQuestionHeader.innerHTML = i + 1 + ". " + subjects[i].title;
  idQuestionVraag.innerHTML = subjects[i].statement;
};

function nextQuestion() {
  idGoBack.onclick = function() {
    if (i === 0) {
      idIntro.style = yesDisplay;
      idStemmenTracker.style = yesDisplay;
      idDivBlue.style = yesDisplay;
      idQuestion.style = noDisplay;
    } else {
      i--;
      idQuestionHeader.innerHTML = i + 1 + ". " + subjects[i].title;
      idQuestionVraag.innerHTML = subjects[i].statement;
    };
  };

  i++;
  idQuestionHeader.innerHTML = i + 1 + ". " + subjects[i].title;
  idQuestionVraag.innerHTML = subjects[i].statement;
};

function eens() {
  nextQuestion()
  answers.push(1);
  console.log(answers);
};

function geen() {
  nextQuestion();
  answers.push(2);
  console.log(answers);
};

function oneens() {
  nextQuestion();
  answers.push(3);
  console.log(answers);
};