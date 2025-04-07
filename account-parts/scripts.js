function TestQuestion(number, content, advocacy) {
    this.number = number;
    this.content = content;
    this.advocacy = advocacy;
    this.answer = null;
} 
function setQuestions(number) {
    document.getElementById("advocacy").innerText = testQuestions[number]["advocacy"];
    document.getElementById("question-number").innerText = testQuestions[number]["number"];
    document.getElementById("question-count").innerText = questionCount;
    document.getElementById("question-title").innerText = testQuestions[number]["advocacy"];
    document.getElementById("question-body").innerText = testQuestions[number]["content"];
}


const testQuestions = {
    1: new TestQuestion(1, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "Advocacy"),
    2: new TestQuestion(2, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "Advocacy"),
    3: new TestQuestion(3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "Advocacy"),
    4: new TestQuestion(4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "Advocacy"),
    5: new TestQuestion(5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "Advocacy"),
    6: new TestQuestion(6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet pharetra tellus, a finibus libero. Nulla facilisi. Maecenas id lectus tortor. Nam faucibus et enim ut gravida. Praesent lacinia at tellus sit amet interdum. Praesent lobortis non lectus id suscipit. Mauris eu erat non risus tempor cursus.", "Advocacy")
};
let currentQuestion = 0; 
const questionCount = Object.keys(testQuestions).length;



document.getElementById("start-button").addEventListener("click", e => { 
    e.preventDefault();
    document.getElementById("start-test").style.display = "none";
    document.getElementById("test-proper").style.display = "block"
    currentQuestion++;
    setQuestions(currentQuestion);
});


document.getElementById("prev-button").addEventListener("click", e => {
    e.preventDefault();
    currentQuestion--;
    if (currentQuestion !== 0) {
        setQuestions(currentQuestion);
    } else {
        document.getElementById("start-test").style.display = "block";
        document.getElementById("test-proper").style.display = "none";       
    }
});

document.getElementById("next-button").addEventListener("click", e => {
    e.preventDefault();
    currentQuestion++;
    if (currentQuestion <= questionCount) {
        setQuestions(currentQuestion);
    } else {
    }
});

// document.getElementById("sign-in-button").addEventListener("click", (e) => {
//     e.preventDefault();

//     const forgotMessage = document.getElementById("forgot-password");
//     forgotMessage.style.display = "none";

//     const NAME_REGEX = /^\S+\s\S+$/;
//     const tempName = document.getElementById("password-login").value.trim();

//     if (NAME_REGEX.test(tempName)) {
//       forgotMessage.style.display = "inline";
//     }
// });

// const radioButtons = [
//     document.getElementById("strongly-agree"),
//     document.getElementById("agree"),
//     document.getElementById("neutral"),
//     document.getElementById("disagree"),
//     document.getElementById("strongly-disagree"),
// ];

// document.getElementById("strongly-agree").addEventListener("click", e => {
//     e.preventDefault();
//     for (let radioButton of radioButtons) {
//         radioButton.style.backgroundColor = none;
//     }
//     \
// });








