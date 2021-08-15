const questionField = document.querySelector('#questionField');
const button = document.querySelector('#askFirstQuestion');
const buttonAskAgain = document.querySelector('#askAgain');
let message = document.querySelector('#par');

const predictions = ["You should focus on yur goals right now",
    "Pay attention to what is happening around",
    "Call your friend, he/she needs you right now",
    "The cure for grief is movement",
    "You will become great if you believe in yourself",
    "A dream you have will come true",
    "If you have something good in your life, don't let it go!",
    "You can make your own happiness",
    "You are very talented in many ways"
]



button.addEventListener('click', makePrediction);

function makePrediction() {

    let predictionMessage = predictions[Math.floor(Math.random() * predictions.length)];
    message.style.display = 'block';
    message.innerHTML = predictionMessage;
    questionField.style.display = 'none';
    button.style.display = 'none';
    buttonAskAgain.style.display = 'block';
    buttonAskAgain.addEventListener('click', anotherQuestion);
}

function anotherQuestion() {
    questionField.value = "";
    questionField.style.display = 'block';
    button.style.display = 'block';
    buttonAskAgain.style.display = 'none';
    message.style.display = 'none';
}