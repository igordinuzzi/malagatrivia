// Initially hide the quizWrapper and show the welcome screen
document.getElementById("quizWrapper").style.display = "none";

function startQuiz() {
    // Check if the name field is empty
    const nameInput = document.getElementById("name");
    if (nameInput.checkValidity()) {
        // Show the quizWrapper and hide the welcome screen
        document.getElementById("quizWrapper").style.display = "block";
        document.getElementById("welcomeScreen").style.display = "none";

        // Start displaying questions
        displayQuestion();
    } else {
        // Display an error message if the name field is empty
        alert("Please enter your name before starting the quiz.");
    }
}
