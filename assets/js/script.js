//creating var from html elements by using getElementById
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");

//Create button options by using var buttonA,B,C,D

var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// Create 10 questions each with 4 choices
var quizQuestions = [{

    // Question-1
    question: "Javascript is an _______ language?",
    choiceA: "Object-Oriented",
    choiceB: "Object-Based",
    choiceC: "Procedural",
    choiceD: "None of the above",
    correctAnswer: "a"},
  {
    // Question-2
    question: "Which of the following keywords is used to define a variable in Javascript?",
    choiceA: "var",
    choiceB: "let",
    choiceC: "Both A & B",
    choiceD: "None of the above",
    correctAnswer: "c"},
   {
    // Question-3
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    choiceA: "getElementbyId()",
    choiceB: "getElementByClassName()",
    choiceC: "Both  A & B",
    choiceD: "None of the above",
    correctAnswer: "c"},
    {
    // Question-4
    question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    choiceA: "Throws an error",
    choiceB: "Ignores the statements",
    choiceC: "Gives a warning",
    choiceD: "None of the above",
    correctAnswer: "b"},
    {
    // Question-5
    question: "When is localStorage data cleared?",
    choiceA: "No expiration time",
    choiceB: "On page reload",
    choiceC: "On browser close",
    choiceD: "On computer restart",
    correctAnswer: "a"},  
    {
    // Question-6
    question: "Which of the following methods can be used to display data in some form using Javascript?",
    choiceA: "document.write()",
    choiceB: "console.log()",
    choiceC: "window.alert()",
    choiceD: "All of the above",
    correctAnswer: "d"},
    {
    // Question-7
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "href",
    choiceB: "src",
    choiceC: "class",
    choiceD: "index",
    correctAnswer: "b"},
    {
    // Question-8
    question: "How can a datatype be declared to be a constant type?",
    choiceA: "const",
    choiceB: "var",
    choiceC: "let",
    choiceD: "constant",
    correctAnswer: "a"},
    {
    // Question-9
    question: "What keyword is used to check whether a given property is valid or not?",
    choiceA: "in",
    choiceB: "is in",
    choiceC: "exists",
    choiceD: "lies",
    correctAnswer: "a"},
    {
    // Question-10
    question: "Expand DOM?",
    choiceA: "Document Object Method",
    choiceB: " Document Object Model",
    choiceC: "Develop Object Method",
    choiceD: "Develop Object Model",
    correctAnswer: "b"}, 
    ];
