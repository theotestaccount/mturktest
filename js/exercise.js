// Prepare UUID
const queryString = location.search.substring(1);
const data = queryString.split("|");
const level = 2 // Control Group
const lectureID = data[0]; // string
const exerciseID = data[1]; // string
const videoNum = parseInt(data[0]);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var id;

//  Contents //////////////////////////////////////////
const element = document.getElementById("question-contents");
const answerInput = document.createElement("input");
const answerInput2 = document.createElement("input");
const textInput = document.createElement("textArea");
const hint = document.getElementById('hint-text')
document.getElementById ('warning').innerHTML = "Please think through your answers. <br> Answers with random numbers or words will be rejected **"

function getID() {
  id = localStorage.getItem("uuid");
}

$(document).ready(function() {
  getID()

  const exerciseDataArray = exerciseQuestions[exerciseID];
  document.getElementById('question-text').innerHTML = exerciseDataArray[0];

  const exampleCode = exerciseDataArray[1]; //string
  const isFillInTheBlank = exerciseDataArray[2]; // bool
  const contents = exerciseDataArray[3]; //array, multiple type
  const inputSizes = exerciseDataArray[4]; //array, int
  const textAreaPreDefinedText = exerciseDataArray[5]; //string

  if (isFillInTheBlank) {
    createContents(contents, inputSizes);
  } else {
    textInput.setAttribute("value", "");
    textInput.setAttribute("cols", "50");
    textInput.setAttribute("class", "answer-textarea");
    element.appendChild(textInput);
  }

  hint.innerHTML = "Example : <br>" + exerciseDataArray[1];
  hint.style.display = "none";
});

function createContents(contents, inputSizes) {
  var i;
  var answerInputIndex = 0;
  for (i = 0; i < contents.length; i++) {
    if (contents[i] == "input") { // input
      if (answerInputIndex == 0) {
        createInput(answerInput, inputSizes[answerInputIndex]);
        answerInputIndex += 1;
      } else if (answerInputIndex == 1) {
        createInput(answerInput2, inputSizes[answerInputIndex]);
        answerInputIndex += 1;
      } else {
        const input = document.createElement("input");
        createInput(input, inputSizes[answerInputIndex]);
        answerInputIndex += 1;
      }
    } else if (contents[i] == "br") { // <br>
      const br = document.createElement("br");
      element.appendChild(br);
    } else { // textinput
      const text = document.createElement("h4");
      text.innerHTML = contents[i];
      element.appendChild(text);
    }
  }
};

function createInput(input, size) {
  input.setAttribute("type", "text");
  input.setAttribute("value", "");
  input.setAttribute("size", size);
  input.setAttribute("class", "answerInputWithPadding");
  element.appendChild(input);
};

// Handle Next Button Tap
$(".exercise-next-btn")[0].addEventListener("click", function() {
  if (answerInput.value == "" && answerInput2.value == "" && textInput.value == "") {
    showFillInTheBlankAlert()
  } else {
    writeDataAndMoveOn()
  }
});


function showFillInTheBlankAlert() {
  if (confirm("Please answer the question to move on")) {};
}


function writeDataAndMoveOn() {
  var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
  timeSpentOnPage = timeSpentOnPage.toFixed(1);
  firebase.database().ref(id + '/exercise/' + exerciseID).update({
    timeSpent: timeSpentOnPage,
    inputAnswer: answerInput.value + " " + answerInput2.value,
    textareaInput: textInput.value,
    hintOpened: hintOpened
  }, function(error) {
    if (error) {
      present()
    } else {
      present()
    }
  });
}

function present() {
  if (level == 1) {
    determineContentToShow(l1);
  } else if (level == 2) {
    determineContentToShow(l2);
  } else if (level == 3) {
    determineContentToShow(l3);
  }
}

function determineContentToShow(levelContentsArray) {
  const contents = levelContentsArray[videoNum];
  const currentIndex = findI(contents, exerciseID);
  if (currentIndex >= levelContentsArray[videoNum].length - 1) {
    const done = isAllDone(levelContentsArray);
    if (done) {
      window.location.href = "mturk-token.html";
    } else {
      moveOnToNextVideo(videoNum);
    }
  } else {
    const exerciseID = levelContentsArray[videoNum][currentIndex + 1];
    moveOnToFirstExercise(exerciseID);
  }
}

function isAllDone(levelContentsArray) {
  if (levelContentsArray == l3 && videoNum == 1) {
    return true
  } else if (levelContentsArray == l3 && videoNum < 1) {
    return false
  } else if (levelContentsArray == l2 && videoNum == 1) {
    return true
  } else if (levelContentsArray == l2 && videoNum < 1) {
    return false
  } else if (levelContentsArray == l1 && videoNum == 2) {
    return true
  } else if (levelContentsArray == l1 && videoNum < 2) {
    return false
  }
}

function findI(array, id) {
  var index;
  array.some(function(entry, i) {
    if (entry == id) {
      index = i;
    }
  });
  return index;
}

function moveOnToNextVideo(currentVideoNum) {
  const nextVideoNum = currentVideoNum + 1;
  const url = "lecture-contents.html?" + nextVideoNum;
  window.location.href = url;
}

function moveOnToFirstExercise(exerciseID) {
  const url = "exercise.html?" + videoNum  + "|" + exerciseID;
  window.location.href = url;
}

function moveOnToFinalExercise() {
  const url = "finalExercise.html";
  window.location.href = url;
}

// Hints //////////////////////////////////////////
var hintOpened = false;
$(".exercise-hint-btn")[0].addEventListener("click", function() {
  hintOpened = true;
  console.log(hint.innerHTML);
  if (hint.innerHTML == "Example : <br>") {
    showHint("Hint is not available for this exercise")
  } else {
    hint.style.display = "block";
  }

});

function showHint(message) {
  if (confirm(message)) {
  };
}


// function getAnswer(){
//   var answer = "";
//   switch (videoNum) {
//     case 1:
//       answer = lecture1Answers[exerciseNum];
//     break;
//
//     case 2:
//       answer = lecture2Answers[exerciseNum];
//     break;
//
//     case 3:
//       answer = lecture3Answers[exerciseNum];
//     break;
//
//     case 4:
//       answer = lecture4Answers[exerciseNum];
//     break;
//
//     default:
//       answer = "";
//   }
//   return answer
// }

// Prepare Contents
// $(document).ready(function() {
//   var exNum = exerciseNum + 1;
//   var count = currentLectureExerciseCount + 1;
//   document.getElementById('exercise-title').innerHTML = " Exercise " + exNum + " out of " + count;
//
//   if (videoNum == 1 && exerciseNum == 0) {
//     document.getElementById('question-text').innerHTML = "Q: Fill in the blank to complete the function myFunc"
//
//     var text1 = document.createElement("h4");
//     var node1 = document.createTextNode("func myFunc");
//     text1.appendChild(node1);
//
//     answerInput.setAttribute("type", "text");
//     answerInput.setAttribute("value", "");
//     answerInput.setAttribute("size", "2");
//
//     var text2 = document.createElement("h4");
//     var node2 = document.createTextNode("{}");
//     text2.appendChild(node2);
//
//     var element = document.getElementById("question-contents");
//     element.appendChild(text1);
//     element.appendChild(answerInput);
//     element.appendChild(text2);
//
//   } else if (videoNum == 1 && exerciseNum == 1) {
//     document.getElementById('question-text').innerHTML = "Q: Write a function with name ‘myFirstFunc’"
//
//     answerInput.setAttribute("type", "text");
//     answerInput.setAttribute("value", "");
//     answerInput.setAttribute("size", "30");
//
//     var element = document.getElementById("question-contents");
//     element.appendChild(answerInput);
//
//
//   } else if (videoNum == 1 && exerciseNum == 2) {
//     document.getElementById('question-text').innerHTML = "Q: Write a function named ‘multiply.’ <br> Then define two variables inside the function: First one, var num1, with value of 3, and the other, var num2, with value of 10. <br> Finally, define another variable, var multiple, that is a multiple of the first two variables. "
//
//     textInput.setAttribute("value", "");
//     textInput.setAttribute("cols", "50");
//     textInput.setAttribute("class", "answer-textarea");
//
//     var element = document.getElementById("question-contents");
//     element.appendChild(textInput);
//
//   } else if (videoNum == 2 && exerciseNum == 0) {
//     document.getElementById('question-text').innerHTML = "Q: In the last line below, Write down a line of code that calls the function 'addition'."
//
//     textInput.innerHTML = "func addition() { \n  var a = 1 \n  var b = 2 \n  var c = a + b \n} \n \n";
//     textInput.setAttribute("cols", "50");
//     textInput.setAttribute("class", "answer-textarea");
//
//     var element = document.getElementById("question-contents");
//     element.appendChild(textInput);
//
//   } else if (videoNum == 3 && exerciseNum == 0) {
//
//     document.getElementById('question-text').innerHTML = "Q: Write down what should come in the blank to add a parameter with name ‘num1’ of type ‘Int’ to the function below. "
//
//     var text1 = document.createElement("h4");
//     var node1 = document.createTextNode("func myNewFunc(");
//     text1.appendChild(node1);
//
//     answerInput.setAttribute("type", "text");
//     answerInput.setAttribute("value", "");
//     answerInput.setAttribute("size", "10");
//
//     var text2 = document.createElement("h4");
//     var node2 = document.createTextNode("){}");
//     text2.appendChild(node2);
//
//     var element = document.getElementById("question-contents");
//     element.appendChild(text1);
//     element.appendChild(answerInput);
//     element.appendChild(text2);
//
//   } else if (videoNum == 3 && exerciseNum == 1) {
//
//     document.getElementById('question-text').innerHTML = "Q: Add two parameters named ‘myNum1’ and ‘myNum2’ of type ‘Int’ to the function below."
//
//     var text1 = document.createElement("h4");
//     var node1 = document.createTextNode("func anotherNewFunc(");
//     text1.appendChild(node1);
//
//     answerInput.setAttribute("type", "text");
//     answerInput.setAttribute("value", "");
//     answerInput.setAttribute("size", "24");
//
//     var text2 = document.createElement("h4");
//     var node2 = document.createTextNode("){}");
//     text2.appendChild(node2);
//
//     var element = document.getElementById("question-contents");
//     element.appendChild(text1);
//     element.appendChild(answerInput);
//     element.appendChild(text2);
//
//   } else if (videoNum == 3 && exerciseNum == 2) {
//     document.getElementById('question-text').innerHTML = "Q: Inside the function, create a variable, var sum, that sums the two parameters."
//
//     var text1 = document.createElement("h4");
//     text1.innerHTML = "func addTwoNums(num1: Int, num2: Int) {";
//
//     var br1 = document.createElement("br");
//
//     answerInput.setAttribute("type", "text");
//     answerInput.setAttribute("value", "");
//     answerInput.setAttribute("size", "36");
//
//     var br2 = document.createElement("br");
//
//     var text2 = document.createElement("h4");
//     text2.innerHTML = "}";
//
//     var element = document.getElementById("question-contents");
//     element.appendChild(text1);
//     element.appendChild(br1);
//     element.appendChild(answerInput);
//     element.appendChild(br2);
//     element.appendChild(text2);
//
//   } else if (videoNum == 3 && exerciseNum == 3) {
//     document.getElementById('question-text').innerHTML = "Q: Call myFunc with num1 = 10, num2 = 20"
//
//     var text1 = document.createElement("h4");
//     text1.innerHTML = "func myFunc(num1: Int, num2: Int) { <br>    var sum = num1 + num2    <br>}";
//
//     var br1 = document.createElement("br");
//     var br2 = document.createElement("br");
//
//     var text2 = document.createElement("h4");
//     text2.innerHTML = "myFunc(";
//
//     answerInput.setAttribute("type", "text");
//     answerInput.setAttribute("value", "");
//     answerInput.setAttribute("size", "24");
//
//     var text3 = document.createElement("h4");
//     text3.innerHTML = ")";
//
//     var element = document.getElementById("question-contents");
//     element.appendChild(text1);
//     element.appendChild(br1);
//     element.appendChild(br2);
//     element.appendChild(text2);
//     element.appendChild(answerInput);
//     element.appendChild(text3);
//
//   } else if (videoNum == 4 && exerciseNum == 0) {
//     document.getElementById('question-text').innerHTML = "Q: What should come in the blank to make this function to return the variable total? "
//
//     var text1 = document.createElement("h4");
//     text1.innerHTML = "func calculateTotal(num1: Int, num2: Int) -> Int { <br> var total = num1 + num2";
//
//     var br1 = document.createElement("br");
//
//     var divWithPadding1 = document.createElement("div");
//     divWithPadding1.setAttribute("class", "div-with-padding");
//
//     answerInput.setAttribute("type", "text");
//     answerInput.setAttribute("value", "");
//     answerInput.setAttribute("size", "8");
//
//     answerInput2.setAttribute("type", "text");
//     answerInput2.setAttribute("value", "");
//     answerInput2.setAttribute("size", "12");
//
//     var br2 = document.createElement("br");
//
//     var text3 = document.createElement("h4");
//     text3.innerHTML = "}";
//
//     var element = document.getElementById("question-contents");
//     element.appendChild(text1);
//     element.appendChild(br1);
//     element.appendChild(divWithPadding1);
//     divWithPadding1.appendChild(answerInput);
//     element.appendChild(answerInput2);
//     element.appendChild(br2);
//     element.appendChild(text3);
//
//   } else if (videoNum == 4 && exerciseNum == 1) {
//     document.getElementById('question-text').innerHTML = "Q: Fill in the blank so that the var resultOfCube is the return value of function cube, with its parameter num1 = 48"
//
//     var text1 = document.createElement("h4");
//     text1.innerHTML = "func cube(num1: Int) -> Int { <br>     var cube = num1 ^ 3 <br>    return cube <br>    }";
//
//     var br1 = document.createElement("br");
//     var br2 = document.createElement("br");
//
//     var text2 = document.createElement("h4");
//     text2.innerHTML = "var resultOfCube =";
//
//     answerInput.setAttribute("type", "text");
//     answerInput.setAttribute("value", "");
//     answerInput.setAttribute("size", "12");
//
//     var text3 = document.createElement("h4");
//     text3.innerHTML = "(num1:";
//
//     answerInput2.setAttribute("type", "text");
//     answerInput2.setAttribute("value", "");
//     answerInput2.setAttribute("size", "16");
//
//     var text4 = document.createElement("h4");
//     text4.innerHTML = ")";
//
//     var element = document.getElementById("question-contents");
//     element.appendChild(text1);
//     element.appendChild(br1);
//     element.appendChild(br2);
//     element.appendChild(text2);
//     element.appendChild(answerInput);
//     element.appendChild(text3);
//     element.appendChild(answerInput2);
//     element.appendChild(text4);
//   }
// });
