// Exercise Contents
const exerciseQuestions = {

  //////lec_0_0: variable definition & syntax
  "lec_0_0/exe_1_0": [ // key: exerciseID : "lecID/exe_(difficulty, starts from 1, easiest)_(variation, starts from 0)"
    "Q: Assign 25 to var age below",
    "var myVariable = 10", // example code
    true, // isFillInTheBlank (else: textArea)
    ["var age =", "input"], // contents sequence array
    [3], // input size array
    "" // textArea pre-defined text
  ],

  "lec_0_0/exe_1_1": [
    "Q: Assign 5 to var numberOfCats below",
    "var myVariable = 10",
    true,
    ["var numberOfCats =", "input"],
    [3],
    ""
  ],

  "lec_0_0/exe_2_0": [
    "Q: Define a variable with name 'numberOfHouses.' Assign value 100 to the variable",
    "var myVariable = 10",
    true,
    ["var", "input", "=", "input"],
    [16, 3],
    ""
  ],

  "lec_0_0/exe_2_1": [
    "Q: Define a variable with name 'numberOfFriends.' Assign value 117 to the variable",
    "var myVariable = 10",
    true,
    ["var", "input", "=", "input"],
    [14, 1],
    ""
  ],

  "lec_0_0/exe_3_0": [
    "Q: Define a variable with name familyMembers. Assign value 5 to it.",
    "var myVariable = 10",
    true,
    ["var", "input", "input", "input"],
    [13, 1, 1],
    ""
  ],

  "lec_0_0/exe_3_1": [
    "Q: Define var studentNum with value of 18",
    "var myVarialbe = 10",
    true,
    ["var", "input", "input", "input"],
    [13, 2, 3],
    ""
  ],

  "lec_0_0/exe_4_0": [
    "Q: Write a variable with name numberOfDays with value 30",
    "var myVariable = 10",
    true,
    ["input", "input", "input", "input"],
    [3, 14, 2, 3],
    ""
  ],

  "lec_0_0/exe_4_1": [
    "Q: Write a variable with name postingsToFetch with value 28",
    "var myVariable = 10",
    true,
    ["input", "input", "input", "input"],
    [3, 15, 2, 3],
    ""
  ],

  //////lec_0_1: Varialbe syntax with : Int
  "lec_0_1/exe_1_0": [
    "Q: Specify the type of the variable mayAge as an integer",
    "var myVariable : Int = 10",
    true,
    ["var myAge : ", "input", "= 25"],
    [2],
    ""
  ],

  "lec_0_1/exe_1_1": [
    "Q: Explicitly state that var numberOfFriends' type is an integer",
    "var myVariable : Int = 10",
    true,
    ["var numberOfFriends : ", "input", "= 325"],
    [2],
    ""
  ],

  "lec_0_1/exe_2_0": [
    "Q: Explicitly state that 'numberOfLikes' is an Int (integer)",
    "var myVariable : Int = 10",
    true,
    ["var numberOfLikes", "input", "input", "= 75"],
    [1, 2],
    ""
  ],

  "lec_0_1/exe_2_1": [
    "Q: Explicitly state that 'numberOfShares' is an Int (integer)",
    "var myVariable : Int = 10",
    true,
    ["var numberOfShares", "input", "input", "= 15"],
    [1, 2],
    ""
  ],

  "lec_0_1/exe_3_0": [
    "Q: Fill in the blanks such that variable numberOfDays is an Int, with value 100",
    "var myVariable : Int = 10",
    true,
    ["input", "numberOfDays", "input", "input", "= 100"],
    [3, 1, 2],
    ""
  ],

  "lec_0_1/exe_4_0": [
    "Q: Fill in the blanks such thatariable daysTillMyBirthday is an Int, with value 30",
    "var myVariable : Int = 10",
    true,
    ["input", "daysTillMyBirthday", "input", "input", "input", "30"],
    [3, 1, 2, 1],
    ""
  ],

  "lec_0_1/exe_5_0": [
    "Q: Write a variable numberOfFollowers of type Int, with value 1530",
    "",
    true,
    ["input"],
    [32],
    ""
  ],

  "lec_0_1/exe_5_1": [
    "Q: Write a variable videoWatchCount of type Int, with value 73",
    "",
    true,
    ["input"],
    [32],
    ""
  ],

  //////lec_1_0: Function definition
  "lec_1_0/exe_1_0": [
    "Q: Fill in the blank to complete function with name myFirstFunc",
    "func myFunc(){ }",
    true,
    ["func", "input", "(){ }"],
    [11],
    ""
  ],

  "lec_1_0/exe_1_1": [
    "Q: Fill in the blank to complete function with name showComments",
    "func myFunc(){ }",
    true,
    ["func", "input", "(){ }"],
    [13],
    ""
  ],

  "lec_1_0/exe_2_0": [
    "Q: Fill in the blank to complete function with name playVideo",
    "func myFunc(){ }",
    true,
    ["func", "input", "input", "{ }"],
    [9, 1],
    ""
  ],

  "lec_1_0/exe_2_1": [
    "Q: Fill in the blank to complete function with name openLiveVideo",
    "func myFunc(){ }",
    true,
    ["func", "input", "input", "{ }"],
    [15, 2],
    ""
  ],

  "lec_1_0/exe_3_0": [
    "Q: Fill in the blank to complete function with name saveComments",
    "func myFunc(){ }",
    true,
    ["func", "input", "input", "input"],
    [12, 2, 3],
    ""
  ],

  "lec_1_0/exe_4_0": [
    "Q: Fill in the blank to complete function with name sendAlert",
    "func myFunc(){ }",
    true,
    ["input", "input", "input", "input"],
    [4, 10, 2, 3],
    ""
  ],

  "lec_1_0/exe_5_0": [
    "Q: Fill in the blank to complete function with name hidePost",
    "",
    true,
    ["input"],
    [25],
    ""
  ],

  "lec_1_0/exe_5_1": [
    "Q: Write a function named sendMessage",
    "",
    true,
    ["input"],
    [25],
    ""
  ],

  //////lec_1_0_1: Function definition with code inside
  "lec_1_0_1/exe_1_0": [
    "Q: Fill in the blank to complete function below",
    "func addFive() { <br> var num1 = 10 <br> var num2 = num1 + 5 <br> }",
    true,
    ["func addTen()", "input", "br", "var num1 = 10", "br", "var num2 = num1 + 10", "br", "input"],
    [1, 1],
    ""
  ],

  "lec_1_0_1/exe_1_1": [
    "Q: Fill in the blank to complete function below",
    "func addFive() { <br> var num1 = 10 <br> var num2 = num1 + 5 <br> }",
    true,
    ["func multiplyByFive()", "input", "br", "var num1 = 10", "br", "var num2 = num1 * 5", "br", "input"],
    [1, 1],
    ""
  ],

  "lec_1_0_1/exe_2_0": [
    "Q: Fill in the blank to complete function below",
    "func addFive() { <br> var num1 = 10 <br> var num2 = num1 + 5 <br> }",
    true,
    ["func multiplyByTen", "input", "input", "br", "var num1 = 10", "br", "var num2 = num1 * 10 ", "br", "input"],
    [1, 1, 1],
    ""
  ],

  "lec_1_0_1/exe_3_0": [
    "Q: Fill in the blank to complete function with name divideByTwo below",
    "func addFive() { <br> var num1 = 10 <br> var num2 = num1 + 5 <br> }",
    true,
    ["func", "input", "input", "input", "br", "var num1 = 10", "br", "var num2 = num1 / 2", "br", "input"],
    [12, 1, 1, 1],
    ""
  ],

  "lec_1_0_1/exe_4_0": [
    "Q: Fill in the blank to complete function with name divideByFive below",
    "func addFive() { <br> var num1 = 10 <br> var num2 = num1 + 5 <br> }",
    true,
    ["input", "input", "input", "input", "br", "var num1 = 10", "br", "var num2 = num1 / 5", "br", "input"],
    [5, 12, 1, 1, 1],
    ""
  ],

  "lec_1_0_1/exe_5_0": [
    "Q: Fill in the blank to complete function with name powerByTwo below",
    "func addFive() { <br> var num1 = 10 <br> var num2 = num1 + 5 <br> }",
    true,
    ["input", "br", "var num1 = 10", "br", "var num2 = num1 ^ 2", "br", "input"],
    [25, 3],
    ""
  ],

  "lec_1_0_1/exe_6_0": [
    "Q: Fill in the blank to complete function with name addTen. Inside the function, make var num2 equal to num1 plus 10",
    "func addFive() { <br> var num1 = 10 <br> var num2 = num1 + 5 <br> }",
    true,
    ["input", "br", "var num1 = 34", "br", "var num2 =", "input", "br", "input"],
    [20, 10, 3],
    ""
  ],

  "lec_1_0_1/exe_7_0": [
    "Q: Fill in the blank to complete function with name 'square'. Inside the function, make var num2 equal to squal of num1 (i.e, num1 * num1)",
    "func addFive() { <br> var num1 = 10 <br> var num2 = num1 + 5 <br> }",
    true,
    ["input", "br", "var num1 = 10", "br", "input", "br", "input"],
    [18, 18, 3],
    ""
  ],

  "lec_1_0_1/exe_8_0": [
    "Q: Write a function with name 'divideByTen'. Inside the function, define var num1 equal to 70. Then define another var num2 equal to num1 divide by 10.",
    "",
    false,
    [],
    [],
    ""
  ],

  //////lec_2_0: Calling function
  "lec_2_0/exe_1_0": [
    "Q: Fill in the blank to call 'getTotalShareNum' function",
    "func addFive() { <br> var num1 = 10 <br> var num2 = num1 + 5 <br> } <br> addFive()",
    true,
    ["func getTotalShareNum() {", "br", "var shareSinceYesterday = 8", "br", "var shareTotal = shareSinceYesterday + 2", "br", "}", "br", "input", "()"],
    [17],
    ""
  ],

  "lec_2_0/exe_1_1": [
    "Q: Fill in the blank to call 'doubleLikes' function",
    "func addFive() { <br> var num1 = 10 <br> var num2 = num1 + 5 <br> } <br> addFive()",
    true,
    ["func doubleLikes() {", "br", "var likes = 52", "br", "var doubled = likes * 2", "br", "}", "br", "input", "()"],
    [15],
    ""
  ],

  "lec_2_0/exe_2_0": [
    "Q: Fill in the blank to call 'subtractFakeLikes' function",
    "func addFive() { <br> var num1 = 10 <br> var num2 = num1 + 5 <br> } <br> addFive()",
    true,
    ["func subtractFakeLikes() {", "br", "var likes = 100", "br", "var fakeLikes = 3", "br", "var validLikes = likes - fakeLikes", "br", "}", "br", "input", "input"],
    [17, 1],
    ""
  ],

  "lec_2_0/exe_3_0": [
    "Q: Fill in the blank to call 'likesFromTwoPostings' function",
    "",
    true,
    ["func likesFromTwoPostings() {", "br", "var likesFromPosting1 = 32", "br", "var likesFromPosting2 = 76", "br", "var total = likesFromPosting1 + likesFromPosting2", "br", "}", "br", "input"],
    [22],
    ""
  ],

  "lec_2_0/exe_4_0": [
    "Q: Write a function with name 'totalPopulation'. <br> Then write three variables in the function: <br> 1. var popuation1 with value 340. <br> 2.var popuation2 with value 100. <br> 3. var total equal to poluation1 plus poluation2. <br> Then call the function.",
    "",
    false,
    [],
    [],
    ""
  ],

  //////lec_3_0: Parameter - 1 parameter

  "lec_3_0/exe_1_0": [
    "Q: Fill in the blank to complete 'addOneVideo' function with one parameter, 'numberOfVideos'",
    "func addFive(num1: Int) { <br> var num2 = num1 + 5 <br> }",
    true,
    ["func addOneVideo(", "input", ": Int) {", "br", "var newVideoNum = numberOfVideos + 1", "br", "}"],
    [16],
    ""
  ],

  "lec_3_0/exe_2_0": [
    "Q: Fill in the blank to complete 'addOneLike' function with one parameter, 'likeNum' of type 'Int'",
    "func addFive(num1: Int) { <br> var num2 = num1 + 5 <br> }",
    true,
    ["func addOneLike(", "input", ":", "input", ")", "{", "br", "var newLikeNum = likeNum + 1", "br", "}"],
    [10, 4],
    ""
  ],


  "lec_3_0/exe_3_0": [
    "Q: Fill in the blank to complete 'addOnePhoto' function with one parameter, 'photoNum' of type 'Int'",
    "func addFive(num1: Int) { <br> var num2 = num1 + 5 <br> }",
    true,
    ["func addOnePhoto(", "input", ")", "{", "br", "var newPhotoNum = photoNum + 1", "br", "}"],
    [14],
    ""
  ],

  "lec_3_0/exe_4_0": [
    "Q: Fill in the blank to complete 'doubleStreamingCount' function with one parameter, 'count' of type 'Int'. <br> Then fill in the second blank to make var doubled equal to 'count' times 2.",
    "func addFive(num1: Int) { <br> var num2 = num1 + 5 <br> }",
    true,
    ["func doubleStreamingCount(", "input", ")", "{", "br", "var doubled = ", "input", "* 2 ", "br", "}"],
    [10, 6],
    ""
  ],

  "lec_3_0/exe_5_0": [
    "Q: Write a function with name 'addFollowerCount' function with one parameter, 'newFollowerNum' of type 'Int'. <br> Inside the function, declare a var existingFollowerNum equal to 130. <br> Then declare another var totalFollower, which is equal to 'existingFollowerNum' plus 'newFollowerNum.'",
    "",
    false,
    [],
    [],
    ""
  ],

  //////lec_3_1: Parameter - 2 parameters
  "lec_3_1/exe_1_0": [
    "Q: Fill in the blank to complete 'multiply' function with two parameters, 'num1' and 'num2'",
    "func add(num1: Int, num2: Int) { <br> var num3 = num1 + num2 <br> }",
    true,
    ["func multiply(", "input", ": Int,", "input", ": Int,", ")", "{", "br", "var num3 = num1 * num2", "br", "}"],
    [4, 4],
    ""
  ],

  "lec_3_1/exe_1_1": [
    "Q: Fill in the blank to complete 'divide' function with two parameters, 'param1' and 'param2'",
    "func add(num1: Int, num2: Int) { <br> var num3 = num1 + num2 <br> }",
    true,
    ["func divide(", "input", ": Int,", "input", ": Int,", ")", "{", "br", "var result = param1 / param2", "br", "}"],
    [4, 4],
    ""
  ],

  "lec_3_1/exe_2_0": [
    "Q: Fill in the blank to complete 'photosAndVideoTotal' function with two parameters, 'photos' and 'videos' of type Int.",
    "func add(num1: Int, num2: Int) { <br> var num3 = num1 + num2 <br> }",
    true,
    ["func photosAndVideoTotal(", "input", ")", "{", "br", "var total = photos + videos", "br", "}"],
    [12],
    ""
  ],

  "lec_3_1/exe_3_0": [
    "Q: Fill in the blank to complete 'getValidLikes' function with two parameters, 'totalLikes' and 'fakeLikes' of type Int.",
    "func add(num1: Int, num2: Int) { <br> var num3 = num1 + num2 <br> }",
    true,
    ["func getValidLikes(", "input", ")", "{", "br", "var total =", "input", "-", "input", "br", "}"],
    [15, 8, 8],
    ""
  ],

  //////lec_3_2: Calling with Parameter
  "lec_3_2/exe_1_0": [
    "Q: Fill in the blank to call 'gotTwoMoreLikes' function with its parameter, 'likes', equal to 42",
    "func addFive(num1: Int) { <br> var num2 = num1 + 5 <br> } <br> addFive(num1: 10)",
    true,
    ["func gotTwoMoreLikes(likes: Int) {", "br", "var newLikes = nulikesm1 + 2", "br", "}", "br", "input", "(likes: 42)"],
    [16],
    ""
  ],

  "lec_3_2/exe_2_0": [
    "Q: Fill in the blank to call 'addOneMoreVideoToWatchLater' function with its parameter, 'videoNum', equal to 10",
    "func addFive(num1: Int) { <br> var num2 = num1 + 5 <br> } <br> addFive(num1: 10)",
    true,
    ["func addOneMoreVideoToWatchLater(videoNum: Int) {", "br", "var totalWatchLater = videoNum + 1", "br", "}", "br", "input", "(videoNum:", "input", ")"],
    [30, 4],
    ""
  ],

  "lec_3_2/exe_3_0": [
    "Q: Fill in the blank to call 'addFiveSteps' function with its parameter, 'steps', equal to 15",
    "func addFive(num1: Int) { <br> var num2 = num1 + 5 <br> } <br> addFive(num1: 10)",
    true,
    ["func addFiveSteps(steps: Int) {", "br", "var moreSteps = steps + 5", "br", "}", "br", "input", "(", "input", ")"],
    [12, 8],
    ""
  ],

  "lec_3_2/exe_4_0": [
    "Q: Fill in the blank to call 'gotTenMoreReplies' function with its parameter, 'replies', equal to 22",
    "",
    true,
    ["func gotTenMoreReplies(replies: Int) {", "br", "var total = replies + 10", "br", "}", "br", "input"],
    [16],
    ""
  ],

  "lec_3_2/exe_5_0": [
    "Q: Write a function with name 'addTwoToMessageNum' with one parameter, 'messages' of type Int. <br> Inside the function, declare one variable 'newMessageNum' which is equal to messages + 2.",
    "",
    false,
    [],
    [],
    ""
  ],

  "lec_3_2/exe_6_0": [
    "Q: Fill in the blank to call 'studentNum' function with its two parameters, 'class1' and 'class2' equal to 15 and 21, respectively",
    "",
    true,
    ["func studentNum(class1: Int, class2: Int) {", "br", "var total = class1 + class2", "br", "}", "br", "input"],
    [35],
    ""
  ],

  //////lec_4_0: Return
  "lec_4_0/exe_1_0": [
    "Q: The function below 'weekendMeetings' returns the value of 'total'. Fill in the blank to assign return value of 'weekendMeetings' to the new variable 'meetings'",
    "func multiply(num1: Int, num2: Int) { <br> var num3 = num1 * num2 <br> return num3 <br> } <br> var result = multiply(num1: 10, num2: 20)",
    true,
    ["func weekendMeetings(sat: Int, sun: Int) {", "br", "var total = sat + sun ", "br", "return total", "}", "br", "var", "input", "= weekendMeetings(num1: 10, num2: 20)"],
    [5],
    ""
  ],

  "lec_4_0/exe_2_0": [
    "Q: The function below 'numOfShoes' returns the value of 'total'. Fill in the blank to assign return value of 'numOfShoes' to the new variable 'allShoes'",
    "func multiply(num1: Int, num2: Int) { <br> var num3 = num1 * num2 <br> return num3 <br> } <br> var result = multiply(num1: 10, num2: 20)",
    true,
    ["func numOfShoes(mine: Int, sisters: Int) {", "br", "var total = mine + sisters", "br", "input", "total", "br", "}", "br", "var", "input", "input", "numOfShoes(mine: 10, sisters: 20)"],
    [5, 7, 1],
    ""
  ],

  "lec_4_0/exe_3_0": [
    "Q: The function below 'ballsInBasket' returns the value of 'ballTotal'. Fill in the blank to assign return value of 'ballsInBasket' to the new variable 'totalBallsInBasket'",
    "func multiply(num1: Int, num2: Int) { <br> var num3 = num1 * num2 <br> return num3 <br> } <br> var result = multiply(num1: 10, num2: 20)",
    true,
    ["func ballsInBasket(baseketball: Int, baseball: Int) {", "br", "var ballTotal = baseketball + baseball", "br", "input", "ballTotal", "br", "}", "br", "var", "input", "input", " ballsInBasket(baseketball: 10, baseball: 20)"],
    [5, 13, 1],
    ""
  ],

  "lec_4_0/exe_4_0": [
    "Q: The function below 'twoMonthAttendance' returns the value of 'twoMonthTotal'. Fill in the blank to assign return value of the function to the new variable 'totalAttendance'",
    "func multiply(num1: Int, num2: Int) { <br> var num3 = num1 * num2 <br> return num3 <br> } <br> var result = multiply(num1: 10, num2: 20)",
    true,
    ["func twoMonthAttendance(thisMonth: Int, lastMonth: Int) {", "br", "var twoMonthTotal = thisMonth * lastMonth", "br", "input", "}", "br", "input"],
    [15, 20],
    ""
  ],
};
