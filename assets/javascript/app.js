
var questionArray =
    ["1. What is the capital of Mexico?",
        "2. What is the capital of Brazil?",
        "3. What is the capital of Japan?",
        "4. What is the capital of China?",
        "5. What is the capital of USA?",
        "6. What is the capital of Colombia?",
        "7. What is the capital of India?"];
var answerArray =
    [["CDMX", "Monterrey", "Guadalajara", "Chiapas"],
    ["Paraiso", "Santiago", "Buenos Aires", "Providencia"],
    ["Kyoto", "Hiroshima", "Tokyo", "Osaka"],
    ["Hong Kong", "Macau", "Shanghai", "Beijing"],
    ["Washington", "Boston", "Dallas", "Chicago"],
    ["Medellin", "Bogota", "Cartagena", "Cali"],
    ["Mumbai", "Hyderabad", "Bangalore", "New Delhi"]];

var correctAnswers = ["CDMX", "Santiago", "Tokyo", "Beijing", "Washington", "Bogota", "New Delhi"];

var hereButton = $("#here");
var submitButton = $("#submit");

// var questionCounter = 0;
// var selecterAnswer;
var clock;
var correctCount = 0;
var incorrectCount = 0;

console.log("SI LLEGUE 1");

var counter = 90;

$(document).ready(function () {

    hereButton.click(function () {
        console.log("EL BOTON SI JALA");

        // cuando le pinque que salgan todas las preguntas con sus posibles respuestas 
        displayQuestions();
    });

    function displayQuestions() {

        $("#preguntas").empty();

        // cuando le pinque que salga el counter 
        timer();

        // i = preguntas 
        // x = array de respuestas 
        // y = string dentro del array de respuestas 

        for (var i = 0; i < questionArray.length; i++) {

            console.log(questionArray[i]);
            $("#preguntas").append($("<br>"), $("<br>"), questionArray[i]);

            console.log(answerArray[i][0] + " / " + answerArray[i][1] + " / " + answerArray[i][2] + " / " + answerArray[i][3]);

            var check1 = $(`<div class="custom-control custom-radio custom-control-inline">
                <input type="radio" value="${answerArray[i][0]}" id="customRadioInline1${i}" name="customRadioInline${i}" class="custom-control-input">
                <label class="custom-control-label" for="customRadioInline1${i}">${answerArray[i][0]}</label>
              </div>`);
            var check2 = $(`<div class="custom-control custom-radio custom-control-inline">
                <input type="radio" value="${answerArray[i][1]}" id="customRadioInline2${i}" name="customRadioInline${i}" class="custom-control-input">
                <label class="custom-control-label" for="customRadioInline2${i}">${answerArray[i][1]}</label>
              </div>`);
            var check3 = $(`<div class="custom-control custom-radio custom-control-inline">
                <input type="radio" value="${answerArray[i][2]}" id="customRadioInline3${i}" name="customRadioInline${i}" class="custom-control-input">
                <label class="custom-control-label" for="customRadioInline3${i}">${answerArray[i][2]}</label>
              </div>`);
            var check4 = $(`<div class="custom-control custom-radio custom-control-inline">
                <input type="radio" value="${answerArray[i][3]}" id="customRadioInline4${i}" name="customRadioInline${i}" class="custom-control-input">
                <label class="custom-control-label" for="customRadioInline4${i}">${answerArray[i][3]}</label>
              </div>`);

            $("#preguntas").append($("<br>"), check1, check2, check3, check4);

        }

    }

    function timer() {
        clock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                // clearInterval(counter);
                alert("TIME'S UP!!!")

                // $(".container").clear();
            }
            if (counter > 0) {
                counter--;
            }
            $("#timer").html(counter + " seconds left");

        }
    }

    submitButton.click(function () {
        clearInterval(clock);
        for (var i = 0; i < questionArray.length; i++) {
            var result = $(`input[type=radio][name=customRadioInline${i}]:checked`).val();
            console.log(result);

            if (result === correctAnswers[i]) {
                console.log("correct");
                correctCount++;

            }
            else {
                console.log("incorrect");
                incorrectCount++;
            }

        }

        alert("correct: " + correctCount + "\n" + "incorrect: " + incorrectCount);



    });
})

