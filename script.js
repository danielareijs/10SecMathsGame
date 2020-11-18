$(document).ready(function(){


var currentEquation;
var currentAnswer;
var timeLeft;
var timer;
var score = 0;
var highScore = 0;

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
    timeLeft ++;
    score ++;
    $('#score').text(score);
 }
};

var countDown = function(){
  $('#secondsLeft').text(timeLeft);
    if(timeLeft > 0){
      timeLeft -= 1;
    } else {
      clearInterval(timer);
      $('#playBtn').text('Play Again').removeClass('hide');
      newHighScore();
      score = 0;
    }
  }


  $('#playBtn').on('click', function(){
      timeLeft = 10;
      $('#score').text(score);
      timer = setInterval(countDown, 1000);
      currentEquation = getRandomEquation();
      $('#playBtn').addClass('hide');
  })


  $('#answer').on('keyup', function(){
    checkAnswer();
  })

  var newHighScore = function(){
    if(highScore < score){
      highScore = score;
      $('#highScore').text(highScore);
    }
  }

});
