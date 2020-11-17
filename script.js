$(document).ready(function(){

var currentEquation;
var currentAnswer;
var timeLeft;
var timer;

var getRandomEquation = function(){
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var equation = num1 + ' + ' + num2;
  currentAnswer = num1+num2;
  currentEquation = equation;
  $('#mathEquation').text(equation);
}

var checkAnswer = function(){
  var answerValue = $('#answer').val();
    if(answerValue == currentAnswer){
    $('#answer').val('');
    getRandomEquation()
 }
};


var countDown = function(){
  $('#secondsLeft').text(timeLeft);
    if(timeLeft > 0){
      timeLeft -= 1;
    } else {
      clearInterval(timer);
    }
  }



$('#playBtn').on('click', function(){
    timeLeft = 10;
    timer = setInterval(countDown, 1000)
    currentEquation = getRandomEquation();
})

$('#answer').on('keyup', function(){
    checkAnswer();
  })




});
