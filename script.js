var noDisplay = "display:none;",
    yesDisplay = "display:block",
    bgGray = "background-color:gray;",
    bgBlack = "background-color:black;",
    idIntro = document.getElementById("intro"),                               // white background div
    idStemmenTracker = document.getElementById("stemmen-tracker"),            // gray background div
    idDivBlue = document.getElementById("div-blue"),                          // blue background div
    idQuestion = document.getElementById("question"),                         // white background div with question
    idBelangrijkeStelling = document.getElementById("belangrijke-stelling"),  // white background div with imp-statements
    idResultsPage = document.getElementById("resultsPage"),
    idQuestionHeader = document.getElementById("questionHeader"),             // h1 question header blue
    idQuestionVraag = document.getElementById("questionVraag"),               // p question vraag
    idGoBack = document.getElementById("goBack"),                             // go back button
    idEens = document.getElementById("eens"),                                 // "eens" button
    idGeen = document.getElementById("geen"),                                 // "geen van beide" button
    idOneens = document.getElementById("oneens"),                             // "oneens" button
    idSlaOver = document.getElementById("slaOver"),                           // "sla over" button
    idGoBackToQ = document.getElementById("goBackToQ"),                       // go back to question btn from stellingen
    partyNames = [],
    answers = {},    
    currentquestion = 0,
    i = 0;

function goBack() {                                             // go back button questions
    if (currentquestion === 1) {
      idIntro.style = yesDisplay;
      idStemmenTracker.style = yesDisplay;
      idDivBlue.style = yesDisplay;
      idQuestion.style = noDisplay;
      currentquestion = 0
    } else if (currentquestion > 1) {
      i--;
      currentquestion--;
      idQuestionHeader.innerHTML = i + 1 + ". " + subjects[i].title;
      idQuestionVraag.innerHTML = subjects[i].statement;
      showAnsBtn();
    };
  };

function startQuiz() {                                                        // start quiz
  currentquestion = 1
  idIntro.style = noDisplay;
  idStemmenTracker.style = noDisplay;
  idDivBlue.style = noDisplay;
  idQuestion.style = yesDisplay;

  idQuestionHeader.innerHTML = i + 1 + ". " + subjects[i].title;
  idQuestionVraag.innerHTML = subjects[i].statement;
  idGoBack.onclick = goBack;
};

function resetBgColor() {
  idEens.style = bgBlack;
  idGeen.style = bgBlack;
  idOneens.style = bgBlack;
};

function showAnsBtn() {
  if (answers[i] === 1) {
    resetBgColor();
    idEens.style = bgGray;
  } else if (answers[i] === 2) {
    resetBgColor();
    idGeen.style = bgGray;
  } else if (answers[i] === 3) {
    resetBgColor();
    idOneens.style = bgGray;
  }
};

function nextQuestion() {
  if (i < 7) {
    i++;
    currentquestion++;
    idQuestionHeader.innerHTML = i + 1 + ". " + subjects[i].title;
    idQuestionVraag.innerHTML = subjects[i].statement;
    showAnsBtn();
  }
}

function answerFunc(val) {
  if (i < 6 ) {
    answers[i] = val;
    nextQuestion()
  } else if (i === 6 ) {
    answers[i] = val;
    idQuestion.style = noDisplay;
    idBelangrijkeStelling.style = yesDisplay;
  } else if (answers[i]) {
    if (i < 6) {
      nextQuestion();
      showAnsBtn();
    } else {
      idQuestion.style = noDisplay;
      idBelangrijkeStelling.style = yesDisplay;
    };
  };
};

function goBackQ() {
  idBelangrijkeStelling.style = noDisplay;
  idQuestion.style = yesDisplay;
  idQuestionHeader.innerHTML = i + 1 + ". " + subjects[i].title;
  idQuestionVraag.innerHTML = subjects[i].statement;
  showAnsBtn();
}
idGoBackToQ.onclick = goBackQ;

function toResults2() {
  var position = ["", "pro", "ambivalent", "contra", "skip"];
  var inputElements = document.getElementsByTagName('input');
  // voeg voor elke partij uit parties een property toe met de naam "score" en de waarde 0
  for (let party of parties) {
    party.score = 0;
  }
    // loop door de subjecten en voor elk subject: 
  for (let subjectIndex in subjects) {
    // loop door de parties en voor elke party:
    for (let partyIndex in subjects[subjectIndex].parties) {
      // als de mening overeenkomt met het desbetreffende antwoord dan:
      if (position[answers[subjectIndex]] == subjects[subjectIndex].parties[partyIndex].position) {
        // vind party in parties voor partyIndex
        foundParty = parties.find(function(party) {
          return party.name == subjects[subjectIndex].parties[partyIndex].name;
        })
        if (foundParty) {
          foundParty.score++;
          // als subject aangevinkt dan score extra ophogen
          if(inputElements[subjectIndex].checked === true) {
            foundParty.score++;
          }
        }
      }
    }
  }
  parties.sort(function(a, b) {
    return b.score - a.score;
  })
}

// function checkBox() {
//   var inputElements = document.getElementsByTagName('input');
//   for(inputIndex in inputElements) {
//     if(inputElements[inputIndex].checked === true) {
//       for(subjectIndex in subjects) {
//         if(inputElements[inputIndex].name == subjects[subjectIndex].title) {
//           for(partyIndex in subjects[subjectIndex].parties) {
//             for(partyIndex2 in parties) {
//               if(subjects[subjectIndex].parties[partyIndex].name == parties[partyIndex2].name) {
//                 parties[partyIndex2].score++;
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

function toBelangrijkeStelling() {
  idBelangrijkeStelling.style = yesDisplay;
  idResultsPage.style = noDisplay;
}

function toResults() {
  toResults2();
  // checkBox();
  idBelangrijkeStelling.style = noDisplay;
  idResultsPage.style = yesDisplay;
  document.getElementById("li1").innerHTML = parties[0].name + ", score: " + parties[0].score;
  document.getElementById("li2").innerHTML = parties[1].name + ", score: " + parties[1].score;
  document.getElementById("li3").innerHTML = parties[2].name + ", score: " + parties[2].score;
}

function bigParties() {                                                       // show big parties
  var bigParty = [];
  for (let q = 0; q < parties.length; q++) {
    if (parties[q].size >= 20) {
      bigParty.push(parties[q]);
    }    
  }
  document.getElementById("li1").innerHTML = bigParty[0].name + ", score: " + bigParty[0].score;
  document.getElementById("li2").innerHTML = bigParty[1].name + ", score: " + bigParty[1].score;
  document.getElementById("li3").innerHTML = bigParty[2].name + ", score: " + bigParty[2].score;
}

function smallParties() {                                                   // show small parties
  var smallParty = [];
  for (let s = 0; s < parties.length; s++) {
    if (parties[s].size >= 10 && parties[s].size < 20) {
      smallParty.push(parties[s]);
    }
  }
  document.getElementById("li1").innerHTML = smallParty[0].name + ", score: " + smallParty[0].score;
  document.getElementById("li2").innerHTML = smallParty[1].name + ", score: " + smallParty[1].score;
  document.getElementById("li3").innerHTML = smallParty[2].name + ", score: " + smallParty[2].score;
}

function allParties() {                                                     // show all parties
  var allParty = [];
  for (let r = 0; r < parties.length; r++) {
    if (parties[r].size) {
      allParty.push(parties[r]);
    }
  }
  document.getElementById("li1").innerHTML = allParty[0].name + ", score: " + allParty[0].score;
  document.getElementById("li2").innerHTML = allParty[1].name + ", score: " + allParty[1].score;
  document.getElementById("li3").innerHTML = allParty[2].name + ", score: " + allParty[2].score;
}