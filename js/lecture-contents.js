// Prepare UUID
const queryString = location.search.substring(1);
const data = queryString.split("|");
var level = 2 // TEST TEST TEST : Control group
const videoNum = data[0]; //string
var lectureID = ""


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Handle Button Tap
$(".longButton")[0].addEventListener("click", function() {
  writeDataAndMoveOn()
});

var id;

$(document).ready(function() {
  getID()
});

function getID() {
  id = localStorage.getItem("uuid");
}

function writeDataAndMoveOn() {
  var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
  timeSpentOnPage = timeSpentOnPage.toFixed(1);
  firebase.database().ref('Test5/' + id + '/lecture-contents/' + videoNum).set({
    timeSpent: timeSpentOnPage
  }, function(error) {
    if (error) {
      present()
    } else {
      present()
    }
  });
}

function present() {
  //level & videoNum -> getNextContents
  const videoNumInt = parseInt(videoNum);
  var numberOfExercises = 0;
  if (level == 1) {
    numberOfExercises = l1[videoNumInt].length - 1;
    if (numberOfExercises > 0) {
      const exerciseID = l1[videoNumInt][1];
      moveOnToFirstExercise(exerciseID);
    };
  } else if (level == 2) {
    numberOfExercises = l2[videoNumInt].length - 1;
    if (numberOfExercises > 0) {
      const exerciseID = l2[videoNumInt][1];
      moveOnToFirstExercise(exerciseID);
    };
  } else if (level == 3){
    numberOfExercises = l3[videoNumInt].length - 1;
    if (numberOfExercises > 0) {
      const exerciseID = l3[videoNumInt][1];
      moveOnToFirstExercise(exerciseID);
    };
  }

  if (numberOfExercises == 0) {
    moveOnToNextVideo(videoNumInt);
  }
}

function moveOnToNextVideo(currentVideoNum){
  const nextVideoNum = currentVideoNum + 1;
  const url = "lecture.html?" + nextVideoNum;
  window.location.href = url;
}

function moveOnToFirstExercise(exerciseID) {
  console.log("video num is", videoNum)
  const url = "exercise.html?" + videoNum + "|" + exerciseID;
  window.location.href = url;
}

// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function getLectureURL() {
  var lectureURL = "";
  if (level == "1") { // high level
    lectureID = "lec_" + videoNum;
    lectureURL = lectureIDAndURL[lectureID];

  } else if (level == "2") {
    const contentsData = l2[videoNum];
    lectureID = contentsData[0];
    lectureURL = lectureIDAndURL[lectureID];

  } else if (level == "3") {
    const contentsData = l3[videoNum];
    lectureID = contentsData[0];
    lectureURL = lectureIDAndURL[lectureID];
  }
  return lectureURL;
}

// create youtube player
var player;
function onYouTubePlayerAPIReady() {
  const lectureURL = getLectureURL()
    player = new YT.Player('lecture-video', {
      width: '840.0',
      height: '472.0',
      videoId: lectureURL,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: {rel: 0, showinfo: 0, ecver: 2}
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
  }

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    document.getElementById('lecture-proceed-btn').disabled = false;
  }
}
