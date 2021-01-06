// Prepare data
var queryString = location.search.substring(1);
var data = queryString.split("|");
var psychNum = data[0];

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
$(".answer-btn")[0].addEventListener("click", writeBtn1ToFirebase);
$(".answer-btn")[1].addEventListener("click", writeBtn2ToFirebase);
$(".answer-btn")[2].addEventListener("click", writeBtn3ToFirebase);
$(".answer-btn")[3].addEventListener("click", writeBtn4ToFirebase);
$(".answer-btn")[4].addEventListener("click", writeBtn5ToFirebase);
$(".answer-btn")[5].addEventListener("click", writeBtn6ToFirebase);
$(".answer-btn")[6].addEventListener("click", writeBtn7ToFirebase);
const button1 = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2");
const button3 = document.getElementById("btn-3");
const button4 = document.getElementById("btn-4");
const button5 = document.getElementById("btn-5");
const button6 = document.getElementById("btn-6");
const button7 = document.getElementById("btn-7");
const no = document.getElementById("no");
const yes = document.getElementById("yes");

const question = document.getElementById("question");
const remaining = document.getElementById("remaining");
const buttons = document.getElementById("buttons");
var answerButtons = document.getElementsByName("answer-btn");

var id;
var answer;
const numberOfQuestions = 18;


$(document).ready(function() {
  getID()
  preparePage()
});

function getID() {
  id = localStorage.getItem("uuid");
}

function preparePage() {
  const num = parseInt(psychNum);
  remaining.innerHTML = "Part 1: Question" + psychNum + " / 18"
  question.innerHTML = questionContents[num]["text"];

  const buttNum = questionContents[num]["butt-num"];
  if (buttNum == 5) {
    button6.style.display = "none";
    button7.style.display = "none";
  }

  const buttScale = questionContents[num]["butt-scale"];
  if (buttScale == "totally") {
    no.innerHTML = "Not <br>at all"
    if (buttNum == 5) {
      yes.innerHTML = "Very<br>much so"
    } else {
      yes.innerHTML = "Very<br>much so"
    }
  } else if (buttScale == "very often") {
    no.innerHTML = "Not <br>even once"
    if (buttNum == 5) {
      yes.innerHTML = "Very <br>often"
    } else {
      yes.innerHTML = "Very <br>often"
    }
  } else {
    if (num == 10) {
      no.innerHTML = "Rarely"
      yes.innerHTML = "Many <br>times"
    } else if (num == 11) {
      no.innerHTML = "Never"
      yes.innerHTML = "Always"
    } else if (num >= 12 && num < 16) {
      if (buttNum == 5) {
        no.innerHTML = "Never"
        yes.innerHTML = "Very <br>much so"
      } else {
        no.innerHTML = "Never"
        yes.innerHTML = "Very <br>much so"
      }
    } else if (num >=16){
      replaceClass([button1, button2, button3, button4, button5, button6, button7])
      if (num==16){//sleep
        no.style.display = "none"
        yes.style.display = "none"
        button1.innerHTML = "less than 2 hours"
        button2.innerHTML = "2-4 hours"
        button3.innerHTML = "4-6 hours"
        button4.innerHTML = "6-8 hours"
        button5.innerHTML = "8-10 hours"
        button6.innerHTML = "more than 10 hours"
        button7.style.display = "none";

      } else if (num==17){//tired
        no.style.display = "none"
        yes.style.display = "none"
        button1.innerHTML = "1: Extremely tired"
        button2.innerHTML = "2: very tired"
        button3.innerHTML = "3: Somewhat tired"
        button4.innerHTML = "4: Not so tired"
        button5.innerHTML = "5: Feeling good"
        button7.style.display = "none";
      } else if (num==18){//tired
        no.style.display = "none"
        yes.style.display = "none"
        button1.innerHTML = "1: Yes"
        button2.innerHTML = "2: No"
        button3.style.display = "none";
        button4.style.display = "none";
        button5.style.display = "none";
        button6.style.display = "none";
        button7.style.display = "none";
      }
    }
  }
  buttons.style.display = "inline-block"
}

function replaceClass(buttonsArray) {
  for (var i=0; i<buttonsArray.length; i++) {
    buttonsArray[i].className = buttonsArray[i].className.replace("col-lg-1", "col-lg-4");
    buttonsArray[i].className = buttonsArray[i].className.replace("col-md-1", "col-md-4");
    buttonsArray[i].className = buttonsArray[i].className.replace("col-sm-1", "col-sm-4");
    buttonsArray[i].className = buttonsArray[i].className.replace("col-1", "col-4");
    var lineBreak = document.createElement("br");
    buttonsArray[i].parentNode.insertBefore(lineBreak, buttonsArray[i].nextSibling);
  }
}

function writeBtn1ToFirebase() {
  writeAnswerDataAndMoveOn(button1.innerHTML)
}

function writeBtn2ToFirebase() {
  writeAnswerDataAndMoveOn(button2.innerHTML)
}

function writeBtn3ToFirebase() {
  writeAnswerDataAndMoveOn(button3.innerHTML)
}

function writeBtn4ToFirebase() {
  writeAnswerDataAndMoveOn(button4.innerHTML)
}

function writeBtn5ToFirebase() {
  writeAnswerDataAndMoveOn(button5.innerHTML)
}

function writeBtn6ToFirebase() {
  writeAnswerDataAndMoveOn(button6.innerHTML)
}

function writeBtn7ToFirebase() {
  writeAnswerDataAndMoveOn(button7.innerHTML)
}

function writeAnswerDataAndMoveOn(answer) {
  const num = parseInt(psychNum);
  const question = questionContents[num]["text"];
  var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
  firebase.database().ref('Test5/' + id + '/psyc/' + psychNum).update({
    timeSpent: timeSpentOnPage,
    question: question,
    answer: answer
  }, function(error) {
    if (error) {
      moveOn()
    } else {
      moveOn()
    }
  });
}

function moveOn() {
  const num = parseInt(psychNum)
  if (num == numberOfQuestions) {
    window.location.href = "iq.html";
  } else {
    let nextNum = num + 1
    setTimeout(function(){
      window.location.href = "psych.html?" + nextNum;
    }, 150);
  }
}

const answerWords = {
  1: "Totally - Not at all", // 매우그렇다 - 전혀그렇지 않다
  2: "very often - Not even once" // 매우 자주 있다 - 한번도 없
}

const questionContents = {
  1 : {
    "text" : "When I work or study, I am completely focused",
    "butt-num" : 5,
    "butt-scale" : "totally"
  },
  2 : {
    "text" : "When I work or study, I feel like time goes by at different speeds than usual",
    "butt-num" : 5,
    "butt-scale" : "totally"
  },
  3 : {
    "text" : "I think the experience of working / studying itself is a big reward",
    "butt-num" : 5,
    "butt-scale" : "totally"
  },
  4 : {
    "text" : "When I work or study, I know how good I am at it",
    "butt-num" : 5,
    "butt-scale" : "totally"
  },
  5 : {
    "text" : "I am capable enough to deal with my work / study",
    "butt-num" : 5,
    "butt-scale" : "totally"
  },
  6 : {
    "text" : "In the last 30 days, I have felt nervous or stressed",
    "butt-num" : 5,
    "butt-scale" : "very often"
  },
  7 : {
    "text" : "I work hard",
    "butt-num" : 7,
    "butt-scale" : "totally"
  },
  8 : {
    "text" : "Once I start something, I finish it.",
    "butt-num" : 7,
    "butt-scale" : "totally"
  },
  9 : {
    "text" : "Failure discourages me",
    "butt-num" : 7,
    "butt-scale" : "totally"
  },
  10 : {
    "text" : "I have overcome difficulties to achieve somethng important",
    "butt-num" : 7,
    "butt-scale" : "Many times"
  },
  11 : {
    "text" : "I always try to choose the perfect one <br>(think about your experience at work, as well as everyday things like shopping)",
    "butt-num" : 7,
    "butt-scale" : "Always"
  },
  12 : {
    "text" : "I spend lots of time to pick the perfect word when I text",
    "butt-num" : 7,
    "butt-scale" : "Very much so"
  },
  13 : {
    "text" : "I consider as many options or scenarios as possible when making a decision",
    "butt-num" : 7,
    "butt-scale" : "Very much so"
  },
  14 : {
    "text" : "I am harsh on myself",
    "butt-num" : 5,
    "butt-scale" : "Very much so"
  },
  15 : {
    "text" : "When I fail, I feel like I'm incompetent",
    "butt-num" : 5,
    "butt-scale" : "Very much so"
  },
  16 : {
    "text" : "How many hours did you sleep today?",
    "butt-num" : 6,
    "butt-scale" : "sleep"
  },
  17 : {
    "text" : "Do you feel tired now?",
    "butt-num" : 5,
    "butt-scale" : "tired"
  },
  18 : {
    "text" : "Do you have programming experience, <br>or have ever taken programming courses before?",
    "butt-num" : 2,
    "butt-scale" : "tired"
  }
}
