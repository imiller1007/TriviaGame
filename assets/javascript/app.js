//Global variables----------------------------------------------------------------------
var wins = 0;
var time = 90;
var phrase = "";
var submitClicked=false;
var wrongQuestions=[];
console.log(time)
//Functions-----------------------------------------------------------------------------

function checkAnswers(){
    if (document.getElementById('CA1').checked){
        wins++;
        console.log(wins);
    }

    else{
        (wrongQuestions).push(1);
        console.log(wrongQuestions);
    }

    if (document.getElementById('CA2').checked){
        wins++;
        console.log(wins);
    }

    else{
        (wrongQuestions).push(2);
        console.log(wrongQuestions);
    }

    if (document.getElementById('CA3').checked){
        wins++;
        console.log(wins);
    }

    else{
        (wrongQuestions).push(3);
        console.log(wrongQuestions);
    }

    if (document.getElementById('CA4').checked){
        wins++;
        console.log(wins);
    }

    else{
        (wrongQuestions).push(4);
        console.log(wrongQuestions);
    }

    if (document.getElementById('CA5').checked){
        wins++;
        console.log(wins);
    }

    else{
        (wrongQuestions).push(5);
        console.log(wrongQuestions);
    }

    if (document.getElementById('CA6').checked){
        wins++;
        console.log(wins);
    }

    else{
        (wrongQuestions).push(6);
        console.log(wrongQuestions);
    }

    if (document.getElementById('CA7').checked){
        wins++;
        console.log(wins);
    }

    else{
        (wrongQuestions).push(7);
        console.log(wrongQuestions);
    }

    if (document.getElementById('CA8').checked){
        wins++;
        console.log(wins);
    }

    else{
        (wrongQuestions).push(8);
        console.log(wrongQuestions);
    }

    if (document.getElementById('CA9').checked){
        wins++;
        console.log(wins);
    }

    else{
        (wrongQuestions).push(9);
        console.log(wrongQuestions);
    }

    if (document.getElementById('CA10').checked){
        wins++;
        console.log(wins);
    }
    
    else{
        (wrongQuestions).push(10);
        console.log(wrongQuestions);
    }
    
    $("#score").html("You got " + wins + " out of 10 questions correct.")
    
    if(wins<10){
    $("#wrong").html("Here are the questions you got wrong: " + wrongQuestions)
    }
}

function result(){
    if(wins===0 || wins===1 || wins===2 || wins===3){
        $("#phrase").html("Go back to high school.");
        }

    if(wins===4 || wins===5){
        $("#phrase").html("Well at least you read the cliff notes...");
        }
    if(wins===6 || wins===7){
        $("#phrase").html("Not too shabby!");
    }
    if(wins===8 || wins===9){
        $("#phrase").html("You know your history!");
    }
    if(wins===10){
        $("#phrase").html("We both know you didn't get a perfect 10 your first try.");
    }

    
}




//Main process--------------------------------------------------------------------------


$( document ).ready(function() {
    var runTime = setInterval(function(){time--; $("#time").html(time + " seconds"); }, 1000);
    

function timeOver(){
    clearInterval(runTime);
    checkAnswers();
    result();
    $("#submit").html("Try Again?")
    submitClicked=true;
    }

setTimeout(timeOver, 1000 * 90);

$("#submit").on("click", function(){
    if (submitClicked===false){    
        clearInterval(runTime);
        checkAnswers();
        result();
        $("#submit").html("Try Again?")
        submitClicked=true;
        console.log(submitClicked);
    }
    
    if(submitClicked===true){
        $("#submit").on("click", function(){ 
            location.reload();
            });
        }
    
    });




});

