$(document).ready(function(){


var currentEquation;
var currentAnswer;

var getRandomEquation = function(){
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var equation = num1 + ' + ' + num2;
  currentAnswer = num1+num2;
  currentEquation = equation;
  $('#mathEquation').text(equation);
}


$('#playBtn').on('click', function(){
    currentEquation = getRandomEquation();
})


});
