var noDisplay = "display:none;",
    yesDisplay = "display:block",
    bgGray = "background-color:gray;",
    bgBlack = "background-color:black;",
    idIntro = document.getElementById("intro"), // white background div
    idStemmenTracker = document.getElementById("stemmen-tracker"), // gray background div
    idDivBlue = document.getElementById("div-blue"), // blue background div
    idQuestion = document.getElementById("question"), // white background div with question
    idQuestionHeader = document.getElementById("questionHeader"), // h1 question header blue
    idQuestionVraag = document.getElementById("questionVraag"), // p question vraag
    idGoBack = document.getElementById("goBack"), // go back button
    idEens = document.getElementById("eens"), // "eens" button
    idGeen = document.getElementById("geen"), // "geen van beide" button
    idOneens = document.getElementById("oneens"), // "oneens" button
    idSlaOver = document.getElementById("slaOver"), // "sla over" button
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

function resetBgColor() {
  idEens.style = bgBlack;
  idGeen.style = bgBlack;
  idOneens.style = bgBlack;
};

function nextQuestion() {
  if (i < 6) {
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
        if (answers[i] === 1) {
          resetBgColor();
          idEens.style = bgGray;
        } else if (answers[i] === 2) {
          resetBgColor();
          idGeen.style = bgGray;
        } else if (answers[i] === 3) {
          resetBgColor();
          idOneens.style = bgGray;
        };
      };
    };

    i++;
    idQuestionHeader.innerHTML = i + 1 + ". " + subjects[i].title;
    idQuestionVraag.innerHTML = subjects[i].statement;
  };
};

function answerFunc(val) {
  if (i < 6 && answers[i] === undefined) {
    answers.push(val);
    nextQuestion()
    console.log(answers);
  } else if (answers[i]) {
    nextQuestion();
    if (answers[i] === 1) {
      resetBgColor();
      idEens.style = bgGray;
    } else if (answers[i] === 2) {
      resetBgColor();
      idGeen.style = bgGray;
    } else if (answers[i] === 3) {
      resetBgColor();
      idOneens.style = bgGray;
    };
  };
};