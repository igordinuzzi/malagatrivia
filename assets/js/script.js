// Variables to track quiz state
let currentQuestionIndex = 0;
let score = 0;
let displayedQuestions = [];
let timer;
let timeRemaining = 10;
let answerClicked = false; // Track if an answer has been clicked

// Function to start the quiz
function startQuiz() {
    // Check if the name field is empty
    const nameInput = document.getElementById("name");
    if (nameInput.checkValidity()) {
        // Hide the "PLAY" link when the user clicks "Start Quiz"
        document.getElementById('play-link').style.display = 'none';

        // Show the quizWrapper and hide the welcome screen
        document.getElementById("quizWrapper").style.display = "block";
        document.getElementById("welcomeScreen").style.display = "none";

        // Generate random questions
        getRandomQuestions();

        // Start displaying questions
        displayQuestion();
    } else {
        // Display an error message if the name field is empty
        alert("Please enter your name before starting the quiz.");
    }
}

// Array of quiz questions and their details
const allQuestions = [
    {
        question: "Which region of Spain is M&aacute;laga located in?",
        image: "./assets/img/geography.png",
        ariaLabel: "Map",
        choices: ["Catalonia", "Basque Country", "Andalusia"],
        answer: "Andalusia"
    },
    {
        question: "Which of the following is a famous monument in M&aacute;laga?",
        image: "./assets/img/monument.png",
        ariaLabel: "Monument",
        choices: ["Sagrada Fam&iacute;lia", "Alcazaba", "Alhambra"],
        answer: "Alcazaba"
    },
    {
        question: "M&aacute;laga is the birthplace of which famous artist?",
        image: "./assets/img/painting.png",
        ariaLabel: "Painting",
        choices: ["Pablo Picasso", "Salvador Dali", "Joan Mir&iacute;"],
        answer: "Pablo Picasso"
    },
    {
        question: "Which sea lies to the south of M&aacute;laga?",
        image:  "./assets/img/sea.png",
        ariaLabel: "Sea",
        choices: ["Black Sea", "Adriatic Sea", "Mediterranean Sea"],
        answer: "Mediterranean Sea"
    },
    {
        question: "The annual M&aacute;laga Film Festival primarily promotes films from which language?",
        image:  "./assets/img/language.png",
        ariaLabel: "Language",
        choices: ["English", "Spanish", "French"],
        answer: "Spanish"
    },
    {
        question: "Which of the following rivers runs through M&aacute;laga?",
        image:  "./assets/img/river.png",
        ariaLabel: "River",
        choices: ["Tajo", "Guadalquivir", "Guadalmedina"],
        answer: "Guadalmedina"
    },
    {
        question: "The Feria de Agosto (August Fair) in M&aacute;laga celebrates what?",
        image:  "./assets/img/fair.png",
        ariaLabel: "Fair",
        choices: ["The reconquest of the city by the Catholic Monarchs", "The city's patron saint", "The harvest season"],
        answer: "The reconquest of the city by the Catholic Monarchs"
    },
    {
        question: "Which of the following is a typical dish from M&aacute;laga?",
        image:  "./assets/img/food.png",
        ariaLabel: "Food",
        choices: ["Gazpacho", "Espetos", "Tortilla Espa&ntilde;ola"],
        answer: "Espetos"
    },
    {
        question: "What is the name of M&aacute;laga's main airport?",
        image:  "./assets/img/airport.png",
        ariaLabel: "Aeroplane",
        choices: ["El Prat Airport", "Adolfo Su&aacute;rez Madrid&#x2D;Barajas Airport", "Costa del Sol Airport"],
        answer: "Costa del Sol Airport"
    },
    {
        question: "What is the local name for the coastal area near M&aacute;laga that is popular with tourists?",
        image:  "./assets/img/tourists.png",
        ariaLabel: "Tourists",
        choices: ["Costa Brava", "Costa del Sol", "Costa Blanca"],
        answer: "Costa del Sol"
    },
    {
        question: "What is M&aacute;laga's official language?",
        image:  "./assets/img/spanish.png",
        ariaLabel: "Language",
        choices: ["Spanish", "English", "French"],
        answer: "Spanish"
    },
    {
        question: "What is the average annual temperature in M&aacute;lagaa?",
        image:  "./assets/img/degrees.png",
        ariaLabel: "Hat",
        choices: ["20°C.", "10°C.", "30°C."],
        answer: "30°C."
    },
    {
        question: "Which historical monument is located in the center of M&aacute;laga?",
        image:  "./assets/img/historical.png",
        ariaLabel: "Castle",
        choices: ["La Alhambra", "Gibralfaro Castle", "The Eiffel Tower"],
        answer: "Gibralfaro Castle"
    },
    {
        question: "Which is the most popular beach in M&aacute;laga?",
        image:  "./assets/img/beach.png",
        ariaLabel: "Beach",
        choices: ["Bondi Beach", "Copacabana", "Huelin"],
        answer: "Huelin"
    },
    {
        question: "Which traditional Andalusian dish is commonly enjoyed in M&aacute;laga?",
        image:  "./assets/img/food2.png",
        ariaLabel: "Food",
        choices: ["Gazpacho", "Sushi", "Paella"],
        answer: "Gazpacho"
    },
    {
        question: "What is the currency used in M&aacute;laga?",
        image:  "./assets/img/currency.png",
        ariaLabel: "Currency",
        choices: ["USD Dollar", "Euro", "Pesos"],
        answer: "Euro"
    },
    {
        question: "Which famous music and arts festival takes place in M&aacute;laga?",
        image:  "./assets/img/festival.png",
        ariaLabel: "Festival",
        choices: ["Coachella", "Feria de M&aacute;laga", "Festival de Málaga"],
        answer: "Festival de Málaga"
    },
    {
        question: "What is the name of the hill overlooking M&aacute;laga with panoramic views of the city?",
        image:  "./assets/img/hill.png",
        ariaLabel: "Hill",
        choices: ["Mount Everest", "Gibralfaro Hill", "Kilimanjaro"],
        answer: "Gibralfaro Hill"
    },
    {
        question: "Which Moorish palace is found in M&aacute;laga?",
        image:  "./assets/img/monument2.png",
        ariaLabel: "Monument",
        choices: ["Alcazaba", "Buckingham Palace", "Versailles"],
        answer: "Alcazaba"
    },
    {
        question: "Which type of wine is M&aacute;laga famous for producing?",
        image:  "./assets/img/wine.png",
        ariaLabel: "Glass of wine",
        choices: ["Champagne", "Bordeaux", "Sherry"],
        answer: "Sherry"
    },
    {
        question: "What is the traditional Andalusian dance often performed in M&aacute;laga?",
        image:  "./assets/img/ballet.png",
        ariaLabel: "Ballet",
        choices: ["Salsa", "Flamenco", "Ballet"],
        answer: "Flamenco"
    },
    {
        question: "What is the name of the historic Roman theatre located in M&aacute;laga?",
        image:  "./assets/img/monument3.png",
        ariaLabel: "Monument",
        choices: ["Roman Colosseum", "Acropolis", "Teatro Romano"],
        answer: "Teatro Romano"
    },
    {
        question: "Which M&aacute;laga beach is known for its water sports and windsurfing?",
        image:  "./assets/img/beach2.png",
        ariaLabel: "Beach",
        choices: ["Los Alamos", "La Carihuela", "La Malagueta"],
        answer: "Los Alamos"
    },
    {
        question: "What is the nickname for the residents of M&aacute;laga?",
        image:  "./assets/img/people.png",
        ariaLabel: "People",
        choices: ["Malagans", "Malaguistas", "Malagueños"],
        answer: "Malagueños"
    },
    {
        question: "What is the name of the traditional Andalusian courtyard often seen in M&aacute;laga?",
        image:  "./assets/img/house.png",
        ariaLabel: "House",
        choices: ["Atrium", "Patio", "Alhambra"],
        answer: "Patio"
    },
    {
        question: "Which transportation method connects M&aacute;laga with other major cities in Spain?",
        image:  "./assets/img/transportation.png",
        ariaLabel: "Car",
        choices: ["Bullet train (AVE)", "Ferry", "Aeroplane"],
        answer: "Bullet train (AVE)"
    },
    {
        question: "What is the name of the popular hiking trail in M&aacute;laga that leads to a small white village?",
        image:  "./assets/img/caminito.png",
        ariaLabel: "Trekking path",
        choices: ["Camino de Santiago", "Caminito del Rey", "Inca Trail"],
        answer: "Caminito del Rey"
    },
];


// Function to get random questions
function getRandomQuestions() {
    displayedQuestions = [];
    while (displayedQuestions.length < 10) {
        const randomIndex = Math.floor(Math.random() * allQuestions.length);
        if (!displayedQuestions.includes(randomIndex)) {
            displayedQuestions.push(randomIndex);
        }
    }
}

// Function to display a question
function displayQuestion() {
    clearInterval(timer);
    timeRemaining = 10;
    answerClicked = false; // Reset answerClicked

    if (currentQuestionIndex < displayedQuestions.length) {
        let questionObj = allQuestions[displayedQuestions[currentQuestionIndex]];
        let questionWrapper = document.getElementById("questionWrapper");
        questionWrapper.innerHTML = `
            <h2>${questionObj.question}</h2>
            <img src="${questionObj.image}" alt="${questionObj.ariaLabel}"/>
            ${questionObj.choices.map((choice, index) => {
                return `<button class="answer-button" onclick="checkAnswer('${choice}')" ${answerClicked ? 'disabled' : ''}>${choice}</button>`;
            }).join('')}
        `;

        // Update the question count
        let questionCountElement = document.getElementById("questionCount");
        let questionsLeft = displayedQuestions.length - currentQuestionIndex;
        questionCountElement.textContent = `Questions left: ${questionsLeft}`;

        timer = setInterval(() => {
            const timerElement = document.getElementById("timer");
            timerElement.textContent = `Time: ${timeRemaining} seconds`;
            timeRemaining--;

            if (timeRemaining < 0) {
                clearInterval(timer);
                timerElement.textContent = "Time's up!";
                checkAnswer('');
            }
        }, 1000);
    } else {
        document.getElementById("quizWrapper").innerHTML = `
            <h1>You've completed the quiz! Your score: ${score}</h1>
            <button class="answer-button" onclick="restartQuiz()">Play Again</button>
        `;
    }
}

// Function to check the selected answer
function checkAnswer(choice) {
    if (answerClicked) return; // Do nothing if an answer has already been clicked
    answerClicked = true; // Set answerClicked to true

    clearInterval(timer);

    const feedback = document.getElementById("feedback");

    if (choice === allQuestions[displayedQuestions[currentQuestionIndex]].answer) {
        score++;
        feedback.innerHTML = '<img src="./assets/img/correct.png" alt="Correct"/> <span class="correct-feedback">Correct!</span>';
    } else {
        feedback.innerHTML = `<img src="./assets/img/incorrect.png" alt="Incorrect"/> <span class="incorrect-feedback">Incorrect. The correct answer was: ${allQuestions[displayedQuestions[currentQuestionIndex]].answer}</span>`;
    }

    document.getElementById("score").textContent = score;

    currentQuestionIndex++;
    setTimeout(() => {
        feedback.innerHTML = '';
        displayQuestion();
    }, 2000);
}

// Function to restart the quiz
function restartQuiz() {
    location.reload();
}

// Initially hide the quizWrapper and show the welcome screen
document.getElementById("quizWrapper").style.display = "none";

// Display the welcome screen when the page loads
window.onload = function() {
    document.getElementById("quizWrapper").style.display = "none";
    document.getElementById("welcomeScreen").style.display = "block";
};
