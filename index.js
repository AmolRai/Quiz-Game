const questions = [
    {
        que: "Which of the following is the Markup Language?",
        a: "HTML",
        b: "CSS",
        c: "JavaScript",
        d: "XML",
        ans: "a"
    },
    {
        que: "What does CSS stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "JSON Object Notation",
        d: "Terminals",
        ans: "b"
    },
    {
        que: "Which of the following framework was created by Facebook?",
        a: "Angular",
        b: "React",
        c: "Vue",
        d: "Bootstrap",
        ans: "b"
    }
]

let index = 0, right = 0, wrong = 0;
let total = questions.length;
const questionBox = document.querySelector("h2");
const options = document.querySelectorAll(".options");
function loadQuestion() {
    if (index == total) {
        return end();
    }
    reset();
    let ques = questions[index];
    questionBox.innerText = `${index + 1}) ${ques.que}`;
    options[0].nextElementSibling.innerText = ques.a;
    options[1].nextElementSibling.innerText = ques.b;
    options[2].nextElementSibling.innerText = ques.c;
    options[3].nextElementSibling.innerText = ques.d;
}

function submitQuiz() {
    let ques = questions[index];
    let userAns = getAnswer();
    if (userAns == ques.ans) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
}

function getAnswer() {
    let ans;
    options.forEach((input) => {
        if (input.checked) {
            ans = input.value;
        }
    });
    return ans;
}

function reset() {
    options.forEach((input) => {
        input.checked = false;
    })
}

function end() {
    document.querySelector(".box").innerHTML = `
    <div style="text-align: center">
        <h3>Thank you for playing the Quiz</h3>
        <h2>${right} / ${total} are correct</h2>
    </div>
    `
    document.body.style.backgroundColor = "#4834d4";
}

loadQuestion();