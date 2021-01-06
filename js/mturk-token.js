// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var id;

// Present mTurkCode


function getID() {
  id = localStorage.getItem("uuid");
  var mTurkCode = id.substring(0, 5);
  document.getElementById('mTurkCode').innerHTML = mTurkCode;
}

$(document).ready(function() {
  getID()
  writeData()
});

function writeData() {
  firebase.database().ref('Test5/' + id + '/mTurkCode').set({
    code: mTurkCode
  });
}
