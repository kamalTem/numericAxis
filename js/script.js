var firstNumber = getRandomInt(6,9);//рандомные числа в диапозоне
var secondNumber = getRandomInt(11,14) - firstNumber;
var answer = firstNumber + secondNumber;//то какой ответ будет

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//записывание рандомных чисел на их места в span-ы
$('.first-number').html(firstNumber);
$('.second-number').html(secondNumber);


//first инпут
 $('.input-first').click(function () {
        $('.input-first').on('keyup',function(e){
    console.log(e,this);
    if ($(this).val() != firstNumber){//сравнение введеного числа в инпут с числом из спана
        $(".first-number").addClass('error');
        $( ".input-first" ).css( "color", "red" ); 
    } 
    else {
        $(".first-number").removeClass('error');
        $( ".input-first" ).css( "color", "black").css("border","none").css("background-color","transparent");
        $(".input-first").prop('disabled',true);//что бы менять больше нельзя было и поле ввода пропало
        $('.input-second').each (function() { this.type = 'text'; });   //тут меняем с типа хиден на тип текст и поле появляется   
        secondArrow();//вызов функции создания второй дуги(она ниже создается)
    }
})
    $('input').keyup();      
});
 

//второй инпут
$('.input-second').click(function () {
        $('.input-second').on('keyup',function(e){
    console.log(e,this);
     if ($(this).val() != secondNumber){
    	$(".second-number").addClass('error');
    	$( ".input-second" ).css( "color", "red" ); 
    } 
    else {
    	$(".second-number").removeClass('error');
    	$( ".input-second" ).css( "color", "black").css("border","none").css("background-color","transparent");
    	$(".input-second").prop('disabled',true);
    	$('.input-answer').each (function() { this.type = 'text'; });
    	$("#answer").html("");  
    }
})
    $('input').keyup();
});


//третий инпут
$('.input-answer').on('keyup',function(e){
    console.log(e,this);
     if ($(this).val() != answer){
    	$( ".input-answer" ).css( "color", "red" ); 
    } 
    else {
    	$( ".input-answer" ).css( "color", "black").css("border","none").css("background-color","transparent");
    	$(".input-answer").prop('disabled',true);
    }
})
$('input').keyup();


//canvas
var canvas = document.getElementById('cnvs');
var ctx = canvas.getContext('2d');
var cm = 39;//подгоняем масштаб картинки и реальных сантиметров

var startFirstArrow = (cm * firstNumber) / 2;//точка начальная
var bendFirstArrow = -40; // Изгиб первой дуги
var endFirstArrow = cm * firstNumber;//точка конечная

var startSecondArrow = ((cm * firstNumber) + ((cm * firstNumber) + (cm * secondNumber))) / 2;
var bendSecondArrow = -40 / 2; 
var endSecondArrow = (cm * secondNumber) + (cm * firstNumber); 

//рисуем первую дугу
ctx.beginPath();
ctx.moveTo(0,50);
ctx.quadraticCurveTo(startFirstArrow,bendFirstArrow,endFirstArrow,50);
ctx.strokeStyle = 'red';
ctx.lineWidth = 2;//жирность стрелки
ctx.stroke();

// Рисуем стрелку первой дуге
ctx.beginPath(); 
ctx.moveTo(endFirstArrow, 50);
ctx.lineTo(endFirstArrow - 15, 47);
ctx.moveTo(endFirstArrow, 50);
ctx.lineTo(endFirstArrow - 2, 37);
ctx.stroke();


//рисуем вторую дугу
function secondArrow(){
	ctx.beginPath();
	ctx.moveTo(endFirstArrow,50);
	ctx.quadraticCurveTo(startSecondArrow,bendSecondArrow,endSecondArrow,50);
	ctx.strokeStyle = 'red';
	ctx.lineWidth = 2;
	ctx.stroke();
    
// Рисуем стрелку первой дуге
	ctx.beginPath(); 
	ctx.moveTo(endSecondArrow, 50);
	ctx.lineTo(endSecondArrow - 15, 47);
	ctx.moveTo(endSecondArrow, 50);
	ctx.lineTo(endSecondArrow - 2, 37);
	ctx.stroke();
}
