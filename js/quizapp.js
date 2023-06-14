class QuizItem {
    constructor (question, answer1, answer2, answer3, correctAnswer) {
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

console.log(question1);