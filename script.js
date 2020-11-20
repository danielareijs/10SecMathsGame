$(document).ready(function(){


var currentEquation;
var currentAnswer;
var timeLeft;
var timer;
var score = 0;
var highScore = 0;
var numberLimit = 10;

var generateEquation = function(){

  if($('#arithmetic-form input:checked').length == 0) {
    alert('You must check at least one arithmetic');
  } else {
  var checked = $('#arithmetic-form input:checked');
  var randomChecked = checked[Math.floor(Math.random()*checked.length)];
  var arithmicType = randomChecked.id;

    var num1 = Math.floor(Math.random() * numberLimit) + 1;
    var num2 = Math.floor(Math.random() * numberLimit) + 1;


  switch (arithmicType){
    case "addition":
      currentEquation = num1 + ' + ' + num2;
      currentAnswer = num1 + num2;
      break;
    case "subtraction":
      if(num1 < num2){
        currentEquation = num2 + ' - ' + num1;
        currentAnswer = num2 - num1;
      } else {
        currentEquation = num1 + ' - ' + num2;
        currentAnswer = num1 - num2;
      }
      break;
    case "multiplication":
      currentEquation = num1 + ' * ' + num2;
      currentAnswer = num1 * num2;
      break;
    case "division":
        currentEquation = (num1 * num2) + ' / ' + num1;
        currentAnswer = num2;
    }
  }

  $('#mathEquation').text(currentEquation);
};

var checkAnswer = function(){
  var answerValue = $('#answer').val();
    if(answerValue == currentAnswer){
    $('#answer').val('');
    generateEquation()
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
      currentEquation = generateEquation();
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


$('#number-limit-range').on('input change', function(){
  numberLimit = $(this).val();
  $('#number-limit').text(numberLimit);
})


});
