var noDisplay = "display:none;",
    yesDisplay = "display:block",
    idIntro = document.getElementById("intro"),
    idStemmenTracker = document.getElementById("stemmen-tracker"),
    idDivBlue = document.getElementById("div-blue"),
    idQuestion = document.getElementById("question"),
    idQuestionHeader = document.getElementById("questionHeader"),
    idQuestionVraag = document.getElementById("questionVraag"),
    answers = [],
    i = 0;

function startQuiz() {
  idIntro.style = noDisplay;
  idStemmenTracker.style = noDisplay;
  idDivBlue.style = noDisplay;
  idQuestion.style = yesDisplay;

  idQuestionHeader.innerHTML = i + 1 + ". " + subjects[i].title;
  idQuestionVraag.innerHTML = subjects[i].statement;
};

function goToHome() {
  idIntro.style = yesDisplay;
  idStemmenTracker.style = yesDisplay;
  idDivBlue.style = yesDisplay;
  idQuestion.style = noDisplay;
};

function nextQuestion() {
  i++;
  idQuestionHeader.innerHTML = i + 1 + ". " + subjects[i].title;
  idQuestionVraag.innerHTML = subjects[i].statement;
};

function eens() {
  nextQuestion()
};