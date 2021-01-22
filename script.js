
// change text code

function changeText(text) {
    let display = document.getElementById('change');
    display.innerHTML = "";
    display.innerHTML = text;
}

function defaultText() {
    let display = document.getElementById('change');
    display.innerHTML = "";
    display.innerHTML = "Mark Zuckerberg";
}

function rainbowWill(text) {
    let display = document.getElementById('asidebox');
    display.innerHTML = "";
    display.innerHTML = text;
}

// magic eight ball! copy of one i made

const answers = ["Absolutely!",
    "Fuck yes.",
    "No doubt, no doubt, no doubt...",
    "Yeah why not.",
    "I'd bet my bottom dollar on it.",
    "It flipping looks that way doesn't it",
    "Probably, yeah.",
    "Who knows!?",
    "I don't bloody know. Let us say... No",
    "Don't bank on it",
    "My sources tell me no",
    "The whispers say no",
    "Outlook: fucking awful.",
    "Verrrry much doubt it.",
    "What!? I didn't hear oyu ask again.",
    "No! Fucks sake.",
    "You bettter not talk to me like that.",
    "Ugh, i'm busy, ask again later.",
    "Think! You dolt."];

window.onload = function () {
    let eight = document.getElementById("eight");
    let answer = document.getElementById("answer");
    let eightball = document.getElementById("eight-ball");
    let question = document.getElementById("question");

    eightball.addEventListener("click", function () {
        if (question.value.length < 1) {
            alert('Ask a question, duhhh.');
        } else {
            eight.innerText = "";
            let num = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[num];
        }
    });
};

function myFunction(imgs) {

    let expandImg = document.getElementById("expandedImg");

    let imgText = document.getElementById("imgtext");

    expandImg.src = imgs.src;

    imgText.innerHTML = imgs.alt;

    expandImg.parentElement.style.display = "block";
}