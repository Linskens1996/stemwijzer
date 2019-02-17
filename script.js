var noDisplay = "display:none;",
    yesDisplay = "display:block";

function startQuiz() {
  document.getElementById("intro").style = noDisplay;
  document.getElementById("stemmen-tracker").style = noDisplay;
  document.getElementById("div-blue").style = noDisplay;
  document.getElementById("question").style = yesDisplay;

  document.getElementById("goBack").

  document.getElementById("questionHeader").innerHTML = "1. " + subjects[0].title;
  document.getElementById("questionVraag").innerHTML = subjects[0].statement;
};

console.log(subjects[0].title);
console.log(parties[0].name);