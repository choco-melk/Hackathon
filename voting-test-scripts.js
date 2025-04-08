/**
 * ATTENTION:
 * For the one creating the matching algo, refer to Line 237. ty 
 * 
 */

function TestQuestion(number, content, yesAnswer, noAnswer, neutralAnswer, advocacy) {
    this.number = number;
    this.content = content;
    this.noAnswer = noAnswer;
    this.yesAnswer = yesAnswer;
    this.neutralAnswer = neutralAnswer;
    this.advocacy = advocacy;
    this.answer = null;
} 

/* Page Sections */
const startPage = document.getElementById("start-test");
const testPage = document.getElementById("test-proper");
const additionalInfoPage = document.getElementById("additional-information");
// const accountCreationPage = document.getElementById("account-creation");
// const saveDataPage = document.getElementById("save-data");
const finishPage = document.getElementById("finish-test");

/* Page Buttons */
const startButton = document.getElementById("start-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const additionalInfoPrevButton = document.getElementById("additional-information-prev-button");
const additionalInfoNextButton = document.getElementById("additional-information-next-button");
// const creationPrevButton = document.getElementById("creation-prev-button");
// const creationNextButton = document.getElementById("creation-finish-button");
// const saveDataPrevButton = document.getElementById("no-save-button");
// const saveDataNextButton = document.getElementById("yes-save-button");

/* Question Page Elements */
const advocacy = document.getElementById("advocacy");
const questionNoLabel = document.getElementById("question-number");
const questionCountLabel = document.getElementById("question-count");
const currentProgress = document.getElementById("current-progress")
const questionTitle = document.getElementById("question-title");
const questionBody = document.getElementById("question-body");
const answerDisplay = document.getElementById("answer-display-portion");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const neutralButton = document.getElementById("neutral-button");


/* Additional Information*/
const locationInfo = document.getElementById("location-selection");
const occupationInfo = document.getElementById("occupation-selection");
// const nameInfo = document.getElementById("name-information");
// const passwordInfo = document.getElementById("password-information");

/* Button Properties and Functions */
const testQuestions = [
    new TestQuestion(1,
        "Would you vote for a candidate that is a part of a political dynasty?",
        "Agree", "Disagree", "Neutral", 
        "Political Dynasty"),
    new TestQuestion(2,
        "Would you vote for a candidate to be at least a college graduate?",
        "Agree", "Disagree", "Neutral", 
        "Education"),
    new TestQuestion(3,
        "Would you vote for a candidate with prior government experience?",
        "Agree", "Disagree", "Neutral", 
        "Political Experience"),
    new TestQuestion(4,
        "Would you vote for a candidate with proven criminal records?",
        "Agree", "Disagree", "Neutral", 
        "Criminal Record"),
    new TestQuestion(5,
        "Should the government promote gender equality?",
        "Agree", "Disagree", "Neutral", 
        "Gender Equality"),
    new TestQuestion(6,
        "Should the government implement the SOGIE Bill?",
        "Agree", "Disagree", "Neutral", 
        "Human Rights"),
    new TestQuestion(7,
        "Should the government increase protection for indigenous people?",
        "Agree", "Disagree", "Neutral", 
        "Indigenous People Protection"),
    new TestQuestion(8,
        "Should the government legalize divorce in the country?",
        "Agree", "Disagree", "Neutral", 
        "Divorce Legalization"),
    new TestQuestion(9,
        "Should the government legalize induced abortion in the country?",
        "Agree", "Disagree", "Neutral", 
        "Abortion Legalization"),
    new TestQuestion(10,
        "Should the government provide more benefits for senior citizens and persons with disabilities?",
        "Agree", "Disagree", "Neutral", 
        "Senior Citizens and PWD Benefits"),
    new TestQuestion(11,
        "Should the government increase protection for overseas Filipino workers?",
        "Agree", "Disagree", "Neutral", 
        "OFW Protection"),
    new TestQuestion(12,
        "Should the government increase the budget for the education sector?",
        "Agree", "Disagree", "Neutral", 
        "Education"),
    new TestQuestion(13,
        "Should the government protect and empower the agriculture sector?",
        "Agree", "Disagree", "Neutral", 
        "Agriculture"),
    new TestQuestion(14,
        "Should the government prioritize public transportation over private transportation?",
        "Agree", "Disagree", "Neutral", 
        "Public Transportation"),
    new TestQuestion(15,
        "Should the government provide better free healthcare to those in need?",
        "Agree", "Disagree", "Neutral", 
        "Healthcare"),
    new TestQuestion(16,
        "Should the government increase the minimum wage and ban contractualization/end of contract?",
        "Agree", "Disagree", "Neutral", 
        "Working Conditions"),
    new TestQuestion(17,
        "Should the government impose stricter regulations on foreign corporations operating in the country?",
        "Agree", "Disagree", "Neutral", 
        "Foreign Regulations"),
    new TestQuestion(18,
        "Should the government promote environmental conservation and sustainable development?",
        "Agree", "Disagree", "Neutral", 
        "Environment and Development"),
    new TestQuestion(19,
        "Should the government invest more in strengthening the military forces of the country?",
        "Agree", "Disagree", "Neutral", 
        "Strengthening of the Military "),
    new TestQuestion(20,
        "Should the government continue its militant approach to the war on drugs?",
        "Agree", "Disagree", "Neutral", 
        "War on Drugs")                          
];
const questionCount = testQuestions.length;
const statusPercent = 100 / testQuestions.length; 
let questionNumber = 1;

function setTestQuestion(number) {
    advocacy.innerText = testQuestions[number- 1].advocacy;
    questionNoLabel.innerText = testQuestions[number - 1].number;
    questionCountLabel.innerText = questionCount;
    questionTitle.innerText = testQuestions[number - 1].advocacy;
    questionBody.innerText = testQuestions[number - 1].content;
    currentProgress.style.width = ((questionNumber - 1) * statusPercent) + "%";
    flushAllRadioButtons();
    if (testQuestions[number - 1].answer !== null) {
        document.getElementById(testQuestions[number - 1].answer + "-button").style.backgroundColor = "#2B2B2B";

        if(testQuestions[number - 1].answer === "yes"){
            answerDisplay.innerText = testQuestions[number - 1].yesAnswer;
        } else if (testQuestions[number - 1].answer === "no"){
            answerDisplay.innerText = testQuestions[number - 1].noAnswer;
        } else {
            answerDisplay.innerText = testQuestions[number - 1].neutralAnswer;
        }
    } else {
        answerDisplay.innerText = "";
    }
}

/* Radio Button Properties and Functions */
const radioButtons = [
    yesButton,
    noButton,
    neutralButton
];
function flushAllRadioButtons() {
    for (let button of radioButtons) {
        button.style.removeProperty("background-color");
    }
}

/* Button OnClick EventListeners */
startButton.addEventListener("click", e => {
    e.preventDefault();
    startPage.style.display = "none";
    testPage.style.display = "block";       
    setTestQuestion(questionNumber);
});

nextButton.addEventListener("click", e => {
    e.preventDefault();
    if (testQuestions[questionNumber - 1].answer === null) {
        answerDisplay.innerText = "Please choose an answer";
        return
    }

    if (questionNumber === questionCount ) {
        testPage.style.display = "none";
        additionalInfoPage.style.display = "block";        
    } else {
        questionNumber++;  
        setTestQuestion(questionNumber);
    }
    
});
prevButton.addEventListener("click", e => {
    e.preventDefault();
    if (questionNumber === 1) {
        startPage.style.display = "block";
        testPage.style.display = "none";             
    } else {
        questionNumber--;  
        setTestQuestion(questionNumber);
    }
});

additionalInfoNextButton.addEventListener("click", e => {
    e.preventDefault();
    // accountCreationPage.style.display = "block";
    finishPage.style.display = "block";
    additionalInfoPage.style.display = "none";

    // For Candidate Compatibility
    // Put the algo here bro 
});

additionalInfoPrevButton.addEventListener("click", e => {
    e.preventDefault();
    testPage.style.display = "block";
    additionalInfoPage.style.display = "none";
    setTestQuestion(questionNumber);
});

// saveDataNextButton.addEventListener("click", e => {
//     e.preventDefault();
//     accountCreationPage.style.display = "block";
//     saveDataPage.style.display = "none";
// });

// saveDataPrevButton.addEventListener("click", e => {
//     e.preventDefault();
//     additionalInfoPage.style.display = "block";
//     saveDataPage.style.display = "none";
// });

// creationNextButton.addEventListener("click", e => {
//     e.preventDefault();
//     finishPage.style.display = "block";
//     accountCreationPage.style.display = "none";

    /* 
     * FOR THE BACKEND PEOPLE:
     *
     * Put all answers from testQuestions as well as 
     * additional info and account info to database 
     * 
     * For the Test Question answers, retrieve answer data
     * from extracting the answer property from each test question 
     * from testQuestions array.
     * 
     * For the additional info, retrieve the values from variables 
     * locationInfo and other variables in that group ny using .value property.
     * Ex. locationInfo.value; 
     * 
     * Moreover, ensure that the values will be matched into possible candidates.
     */
// });

// creationPrevButton.addEventListener("click", e => {
//     e.preventDefault();
//     additionalInfoPage.style.display = "block";
//     accountCreationPage.style.display = "none";
// });


/* Radio Button OnClick EventListeners */
yesButton.addEventListener("click", e => {
    e.preventDefault();
    flushAllRadioButtons();
    yesButton.style.backgroundColor = "#2B2B2B";
    testQuestions[questionNumber - 1].answer = "yes";
    answerDisplay.innerText = testQuestions[questionNumber - 1].yesAnswer;

});
noButton.addEventListener("click", e => {
    e.preventDefault();
    flushAllRadioButtons();
    noButton.style.backgroundColor = "#2B2B2B";
    testQuestions[questionNumber - 1].answer = "no";
    answerDisplay.innerText = testQuestions[questionNumber - 1].noAnswer;
});
neutralButton.addEventListener("click", e => {
    e.preventDefault();
    flushAllRadioButtons();
    neutralButton.style.backgroundColor = "#2B2B2B";
    testQuestions[questionNumber - 1].answer = "neutral";
    answerDisplay.innerText = testQuestions[questionNumber - 1].neutralAnswer;
});



