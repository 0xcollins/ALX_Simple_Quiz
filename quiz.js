//  Define the checkAnswer function
function checkAnswer() {
    //  Identify the correct answer
    let correctAnswer = "4";
    
    //  Retrieve the user's answer
    let userAnswer = document.querySelector("input[name=quiz]:checked");
    
    // Get the feedback element
    let feedbackElement = document.getElementById("feedback");
    
    //  Compare the user's answer with the correct answer
    if (userAnswer && userAnswer.value === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

//  Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);