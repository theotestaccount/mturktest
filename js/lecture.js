// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(".pre-test-intro-next-btn")[0].addEventListener("click", writeTimeToFirebaseAndMoveOn);

var id;

$(document).ready(function() {
  getID()
});

function getID() {
  id = localStorage.getItem("uuid");
}

function moveOn() {
  window.location.href = "lecture-contents.html?0"
}

function writeTimeToFirebaseAndMoveOn() {
  var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
  firebase.database().ref(id + '/lecture-intro').update({
    timeSpent: timeSpentOnPage
  }, function(error) {
    if (error) {
      moveOn()
    } else {
      moveOn()
    }
  });
}
