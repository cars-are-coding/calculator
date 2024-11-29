
var currentNumber = 1;
var num1 = null;
var num2 = null;
var click = 0;


var $screen = $("#screen");
var $number = $(".number");

//when someone clicks on a number it
//saves the number to do the math 
$number.on('click', function () {
      click++;
    if (click > 12){
        return;
    }
    
    var numberPressed = $(this).html();
    $screen.append(numberPressed);
    $("#clear").css('background-color', '#cc1423');

    if (currentNumber == 1) {
        if (num1 == null) {
            num1 = numberPressed;
        } else {
            num1 = num1 + numberPressed;
        }
    }

    if (currentNumber == 2) {
        if (num2 == null) {
            num2 = numberPressed;
        } else {
            num2 = num2 + numberPressed
        }
        $("#equal").css('background-color', '#cc1423');
    }
    /*
    if (num1 == null) {
        num1 = numberPressed;
    } else if (num2 == null) {
        num2 = numberPressed;
    }
        */
});


/*
document.getElementById("num1").onclick = function write1() 
{
   $screen.append(1); 
}
*/

function more(){
    if (click > 12){
       /*click = click -5;*/
    }
    if (currentNumber == 2){
        findAnswer();
        $screen.empty();
        $screen.append(num1);
    }
    currentNumber = 2; 
}

      $("#plus").on ('click', function() 
        {
            if(num1 != null){
           more();
           $screen.append ("+");
           op = "+";
            };
            return;
        })
             
            $("#minus").on ('click', function() 
               {
                if(num1 != null){
                  more();
                 $screen.append("-");
                 op ="-";
                 /* currentNumber++;*/
                };
                return;
                })

                    $("#multiply").on ('click', function() 
                       {
                        if(num1 != null){
                         more();
                         $screen.append("x");
                         op = "x";
                         /* currentNumber++;*/
                        };
                        return;
                        })

                           $("#divide").on ('click', function() 
                              {
                                if(num1 != null){
                               more();
                               $screen.append("/");
                               op = "/";
                               /*currentNumber++;*/
                                };
                                return;
                            })

$("#clear").on ('click', function() 
{
    $screen.empty();
    num1 = null;
    num2 = null;
    currentNumber = 1;
    click = 0;
    $("#clear").css('background', 'gray');
    $("#equal").css('background', 'gray');

});

 function findAnswer(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
      if (op == "+") {
        answer = num1 + num2;
      }
      if(op == "-") {
        answer = num1 - num2;
      }
      if (op =="x") {
        answer = num1 * num2;
      }
      if (op == "/") {
        answer = num1 / num2;
      }
      num1 = answer;
      num2 = null;
      currentNumber = 1;
 }
/*
$("#equal").on ('click', function()
{
    $screen.append("=");
    console.log(num1, num2);
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(num1, op, num2);
     if (op == "+") {
        answer = num1 + num2;
     }
     if (op == "-") {
        answer = num1 - num2;
     }
     if (op == "x") {
        answer = num1 * num2;
     }
     if (op == "/") {
        answer = num1 / num2;
     }

     
     $screen.append(answer);
     num1 = null;
     num2 = null; 
     currentNumber = 1;  
})
*/

  $("#equal").on('click', function()
{
    var element = document.getElementById('equal');
    var style = window.getComputedStyle(element);
    var backgroundColor = "background-color";
    var buttonColor = element.style.backgroundColor;
    if(buttonColor == 'gray') {
        return;
    }

    $screen.append("=");
    findAnswer();
    console.log(answer);
    if (click > 8){
        $screen.empty();
        var answerLength = answer.toString();
        click = answerLength.length;
    }
    $screen.append(answer);
    $("#equal").css('background-color', 'gray')
})
