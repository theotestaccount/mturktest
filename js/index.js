$(".start-btn")[0].addEventListener("click", writeIndexPageToFirebaseAndMoveOn);

$(document).ready(function() {
  assignUUID()
});

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var id;

function assignUUID() {
  id = uuidv4()
  localStorage.setItem('uuid', id)
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function writeIndexPageToFirebaseAndMoveOn(userId, answer) {
  var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
  firebase.database().ref(id + '/indexPage/').update({
    timeSpent: timeSpentOnPage
  }, function(error) {
    if (error) {
      moveOn()
    } else {
      moveOn()
    }
  });
}

function moveOn() {
  window.location.href="../html/psych.html?1"
}
