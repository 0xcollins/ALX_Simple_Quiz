// Define Function
function checkAnswer() {
    let correctAnswer = "4"; // Declare variable and assign value
    
    // select the checked radio button by its name attribute
    let userAnswer = document.querySelector("input[name=quiz]:checked").value;
    
    // check if the user's answer is correct
    if (userAnswer === correctAnswer){
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else { // if incorrect, display a different message
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add a click event listener to the submit answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
