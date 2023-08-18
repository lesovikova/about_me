const userAnswers = [];
const messagesField = document.querySelector('.quiz__mess');


class QuizItem {
    constructor (question, correctAnswer) {
        this.question = question;
        this.answers = ["I don't know", "Yes, you have", "I don't believe you have"];
        this.correctAnswer = correctAnswer;
    }
}

const question1 = new QuizItem("Have I battled undead in the Great Barrow near Shire?", 1);
const question2 = new QuizItem("Have I been to the dreaded land of Mordor?", 2);
const question3 = new QuizItem("Have I met the ringbearer on my journeys?", 1);
const question4 = new QuizItem('Have I been trained as a hunter since I was a child?', 2);
const question5 = new QuizItem('Have I gone through the Paths of the Dead?', 0);

const quizArray = [question1, question2, question3, question4, question5];

console.log(quizArray);


const quizContainer = document.querySelector('.quiz__container');

//displays the whole form
function displayQuestion(arr, i) {    
    const p = document.createElement('p');
    const button = document.createElement('button');
    button.classList.add('quiz__button');
    button.textContent = "Submit";
    button.style.display = 'block';
    button.classList.add('quiz__submit');
    p.textContent = arr[i].question;
    p.classList.add('quiz__question');
    quizContainer.append(p);
    displayAnswers(arr[i].answers, quizContainer);
    quizContainer.append(button);
    
};

displayQuestion(quizArray, 0);

//displays labels and inputs for the answers
function displayAnswers(arr, container) {
    arr.forEach((item, index) => {
        const insContainer = document.createElement('div');
        container.append(insContainer);
        const answer = document.createElement('LABEL');
        answer.classList.add("quiz__label")
        const inputItem = document.createElement('INPUT');
        inputItem.classList.add("quiz__radio")
        answer.setAttribute('for', `answer${index}`);
        inputItem.setAttribute('type', 'radio');
        inputItem.setAttribute('id', `answer${index}`);
        inputItem.setAttribute('name', 'answer');
        answer.textContent = item;
        insContainer.append(inputItem, answer);
    });
}


//getting the users answer and storying it in an array
function getResults() {
    const checked = document.querySelector('input[name="answer"]:checked');
    if(checked) {
        userAnswers.push(Number(checked.id.at(-1)));
    }

}

//gets the index of the current queastion in the array
function getQuestionIndex(){
    const currentQuestion = document.querySelector('.quiz__question').textContent;
    const itemIndex = quizArray.findIndex(item => item.question == currentQuestion);
    return itemIndex;
}

//checks the correct answers and returns result
function checkAnswers(arrCorrec, arrUser) {
    let count = 0;
    for(let i = 0; i < arrUser.length; i++) {
        if(arrUser[i] === arrCorrec[i].correctAnswer) {
            count++;
            console.log(count);
        }
    }
    return count;
}



//Submit button event
const submitButton = document.querySelector('.quiz__submit').addEventListener('click', (e) => {
    e.preventDefault();
    getResults();   
    const checked = document.querySelector('input[name="answer"]:checked');
    if(getQuestionIndex() == quizArray.length -1 ) {
        quizContainer.textContent = `You have answered ${checkAnswers(quizArray, userAnswers)} questions correctly`;
    }
    else if(getQuestionIndex() < quizArray.length && checked) {
        const p = document.querySelector('.quiz__question');
        p.textContent = quizArray[getQuestionIndex() + 1].question;
        
        if(checked){
        checked.checked = false;
        }
     }
     else {
        messagesField.textContent = "Please select an answer";
    }
    
});