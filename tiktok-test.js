//initial base elements (question list, images and html items)
let questions = [
    "For the 'Brain Rot Question Quiz' TikTok, state TWO of the brain rot questions & their corresponding answers OR name the game being played in the background.",
    "What substance was inside the 100 liter tank in the last video",
    "What game was being played in the background of the 'Brain Rot Question Quiz'?",
    "Briefly summarize the five videos we've just watched.",
    "Emulate TWO gun sounds made in the 'What does your gun sound like?' video OR showcase what your gun sounds like to the class."
]
let images = [
    "worst",
    "terrible",
    "mid",
    "alr",
    "great",
    "best"
]

let finalMessages = [
    "Irreversable damage has been done",
    "Your brain is cooked",
    "Get off of your phone now",
    "Better than most",
    "Your brain isn't fried",
    "Great work"
]

let questionIndex  = 0;

let score = 0;

let questionArea = document.getElementById('question-area');

let checkButton = document.getElementById("check");

let xButton = document.getElementById("x");

let scoreDisplay = document.getElementById("score-display");

let footer = document.getElementById("footer");

function resultScreen(){
    questionIndex++;
    navigateQuestions();
}

function navigateQuestions(){
    if (questionIndex > questions.length){


        questionArea.innerHTML = 
        `
        <h2 clas="question-count">Test Results</h2>
        <h1 class="question">${finalMessages[score]}: ${score*100/questions.length}%</h1>
        <img src="result-images/${images[score]}-score.png" />
        `
        footer.innerHTML  = 
        `
         <a href="index.html"><button class="result-btn">Return Home</button></a>`;
    }
    else if (questionIndex == questions.length){
        questionArea.innerHTML = 
        `
        <h2 clas="question-count"></h2>
        <h1 class="question">Exam Complete</h1>
        `
        footer.innerHTML = 
        `
        <button class="result-btn" onclick="resultScreen()">View Results</button>
        `

    }
    else{
        questionArea.innerHTML = 
        `
        <h2 clas="question-count">Question #${questionIndex + 1}</h2>
        <h1 class="question">${questions[questionIndex]}</h1>
        <input class="answer"/>
        `
        scoreDisplay.textContent = `Current Score: ${score}`;
    }
}

checkButton.addEventListener('click',function(){
    questionIndex++;
    score++;
    navigateQuestions();
})

xButton.addEventListener('click',function(){
    questionIndex++;
    navigateQuestions();
})

