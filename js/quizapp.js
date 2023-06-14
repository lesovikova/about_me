class QuizItem {
    constructor (question, correctAnswer) {
        this.question = question;
        this.answers = ["I don't know", "Yes, you have", "I don't believe you have"];
        this.correctAnswer = correctAnswer;
    }
}

const question1 = new QuizItem("Have I battled undead in the Great Barrow near Shire?", 2);
const question2 = new QuizItem("Have I been to the dreaded land of Mordor?", 3);
const question3 = new QuizItem("Have I met the ringbearer on my journeys?", 2);
const question4 = new QuizItem('Have I been trained as a hunter since I was a child?', 3);
const question5 = new QuizItem('Have I gone through the Paths of the Dead?', 1);

const quizArray = [question1, question2, question3, question4, question5];

console.log(quizArray);


const quizContainer = document.querySelector('.quiz__container');

function displayQuestion(arr, i) {    
    const p = document.createElement('p');
    p.textContent = arr[i].question;

    const answer1 = document.createElement('LABEL');
    answer1.textContent = arr[i].answer1;
    quizContainer.append(p);
};

displayQuestion(quizArray, 2);

function displayAnswers(arr, container) {
    arr.forEach((item) => {
        const answer = document.createElement('LABEL');
        const inputItem = document.createElement('INPUT');
        inputItem.setAttribute('type', 'radio');
        answer.textContent = item;
        console.log(inputItem);
        container.append(inputItem, answer);
        console.log(container);
    });
}

displayAnswers(quizArray[0].answers, quizContainer);