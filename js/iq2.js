// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(".submit-btn")[0].addEventListener("click", writeTest1AnswerToFirebase);

var answerButtons = document.getElementsByName("answerButtons");

var id;
var answer;
var isRight;

$(document).ready(function() {
  getID()
});

function getID() {
  id = localStorage.getItem("uuid");
}

function moveOn() {
  window.location.href = "iq3.html"
}

function writeAnswerDataAndMoveOn() {
  var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
  firebase.database().ref(id + '/iq2').update({
    timeSpent: timeSpentOnPage,
    answer: answer,
    gotItRight: isRight
  }, function(error) {
    if (error) {
      moveOn()
    } else {
      moveOn()
    }
  });
}

function writeTest1AnswerToFirebase() {
  for (var i = 0; i < answerButtons.length; i++) {
    if (answerButtons[i].checked == true) {
      answer = answerButtons[i].value;
      if (answer == "3") {
        isRight = true;
      } else {
        isRight = false;
      }
      writeAnswerDataAndMoveOn();
      break;
    } else if (i == answerButtons.length - 1) {
      alert("Select an answer to proceed");
    }
  };
};
