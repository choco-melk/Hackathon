/**
 * ATTENTION:
 * For the one creating the matching algo, refer to Line 237. ty 
 * 
 */

function TestQuestion(number, content, more, yesAnswer, noAnswer, neutralAnswer, advocacy) {
    this.number = number;
    this.content = content;
    this.more = more;
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
const moreDetailsDisplay = document.getElementById("more-details");
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
        "Explanation: A political dynasty is formed when a family maintains power by securing multiple government positions across several generations (Albert et al., 2016).",
        "Agree", "Disagree", "Neutral", 
        "Political Dynasty"),
    new TestQuestion(2,
        "Would you vote for a candidate to be at least a college graduate?",
        "Explanation: Educational attainment refers to the highest level of education a person has successfully completed (Statistics Canada, 2021).",
        "Agree", "Disagree", "Neutral", 
        "Education"),
    new TestQuestion(3,
        "Would you vote for a candidate with prior government experience?",
        "Explanation: This question refers to candidates who have already served as a government official.",
        "Agree", "Disagree", "Neutral", 
        "Political Experience"),
    new TestQuestion(4,
        "Would you vote for a candidate with proven criminal records?",
        "Explanation: This question refers to candidates that have been convicted of crimes such as graft or plunder.",
        "Agree", "Disagree", "Neutral", 
        "Criminal Record"),
    new TestQuestion(5,
        "Should the government promote gender equality?",
        "Explanation: Gender equality is society's equal valuation of the similarities and differences between men and women, as well as the roles they play (UNICEF, 2017).",
        "Agree", "Disagree", "Neutral", 
        "Gender Equality"),
    new TestQuestion(6,
        "Should the government implement the SOGIE Bill?",
        "Explanation: The SOGIE Bill recognizes the fundamental rights of all people, regardless of sexual orientation or gender identity (Amnesty Philippines, 2023).",
        "Agree", "Disagree", "Neutral", 
        "Human Rights"),
    new TestQuestion(7,
        "Should the government increase protection for indigenous people?",
        "Explanation: This question refers to tribal communities that are the original inhabitants of the land they share ancestral ties with; indigenous people are referred to as Igorot in Luzon or Lumad in Mindanao (Minority Rights Group, 2024).",
        "Agree", "Disagree", "Neutral", 
        "Indigenous People Protection"),
    new TestQuestion(8,
        "Should the government legalize divorce in the country?",
        "Explanation: A divorce or dissolution of marriage is a court order declaring that a valid marriage no longer exists, leaving both parties free to remarry (American Bar Association, 2020).",
        "Agree", "Disagree", "Neutral", 
        "Divorce Legalization"),
    new TestQuestion(9,
        "Should the government legalize induced abortion in the country?",
        "Explanation: Induced abortion is a procedure to terminate a pregnancy that can be performed through medication or surgery (MedlinePlus, n.d.).",
        "Agree", "Disagree", "Neutral", 
        "Abortion Legalization"),
    new TestQuestion(10,
        "Should the government provide more benefits for senior citizens and persons with disabilities?",
        "Explanation: A senior citizen is defined as any person aged sixty years or older (PSA, 2019), while persons with disabilities are those who have long-term physical, mental, intellectual, or sensory impairments that prevent their full and effective participation in society (UNHCR, 2024).",
        "Agree", "Disagree", "Neutral", 
        "Senior Citizens and PWD Benefits"),
    new TestQuestion(11,
        "Should the government increase protection for overseas Filipino workers?",
        "Explanation: Overseas Filipino Workers, or OFWs, are Filipino migrants who have left their homes to work abroad and support their families (Eugenio, 2023).",
        "Agree", "Disagree", "Neutral", 
        "OFW Protection"),
    new TestQuestion(12,
        "Should the government increase the budget for the education sector?",
        "Explanation: This initiative will result in increased funding for public schools and universities, allowing them to provide better learning experiences for students.",
        "Agree", "Disagree", "Neutral", 
        "Education"),
    new TestQuestion(13,
        "Should the government protect and empower the agriculture sector?",
        "Explanation: This initiative has the following implications: the lands and waters where agricultural workers make a living will be protected from private ownership, and agricultural workers will be supported through laws and subsidies.",
        "Agree", "Disagree", "Neutral", 
        "Agriculture"),
    new TestQuestion(14,
        "Should the government prioritize public transportation over private transportation?",
        "Explanation: This initiative will result in cheaper and better public transportation, which will provide service to substantially more people).",
        "Agree", "Disagree", "Neutral", 
        "Public Transportation"),
    new TestQuestion(15,
        "Should the government provide better free healthcare to those in need?",
        "Explanation: This initiative aims to provide all people with access to the full range of quality health services they require, wherever and whenever it's needed, without financial hardship (WHO, 2025).",
        "Agree", "Disagree", "Neutral", 
        "Healthcare"),
    new TestQuestion(16,
        "Should the government increase the minimum wage and ban contractualization/end of contract?",
        "Explanation: Contractualization is defined as the employment practice of hiring workers on fixed-term contracts, which some employers use in such a way where workers won't qualify as regular employees and thus lack the right to regular benefits (Luciano, 2023).",
        "Agree", "Disagree", "Neutral", 
        "Working Conditions"),
    new TestQuestion(17,
        "Should the government impose stricter regulations on foreign corporations operating in the country?",
        "Explanation: This initiative will further reduce foreign involvement and ownership in key sectors of the country.", 
        "Agree", "Disagree", "Neutral", 
        "Foreign Regulations"),
    new TestQuestion(18,
        "Should the government promote environmental conservation and sustainable development?",
        "Explanation: Environmental conservation aims to protect the environment from the threats of pollution and climate change, while sustainable development aims to advance the type of growth that satisfies current needs while not jeopardizing the capacity of future generations to satisfy their own (IJSR, 2024).",
        "Agree", "Disagree", "Neutral", 
        "Environment and Development"),
    new TestQuestion(19,
        "Should the government invest more in strengthening the military forces of the country?",
        "Explanation: This initiative aims to increase the military's budget and resources.",
        "Agree", "Disagree", "Neutral", 
        "Strengthening of the Military "),
    new TestQuestion(20,
        "Should the government continue its militant approach to the war on drugs?",
        "Explanation: The initiative implies that the police’s use of aggressive force with zero tolerance remains as the government’s main solution to the war on drugs.",
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
    moreDetailsDisplay.innerText = "More Details";
    moreDetailsDisplay.style.textDecoration = "underline    ";
    flushAllRadioButtons();
    if (testQuestions[number - 1].answer !== null) {
        document.getElementById(testQuestions[number - 1].answer + "-button").style.backgroundColor = "#2B2B2B";

        if(testQuestions[number - 1].answer === 1){
            answerDisplay.innerText = testQuestions[number - 1].yesAnswer;
        } else if (testQuestions[number - 1].answer === -1){
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

moreDetailsDisplay.addEventListener("click", e => {
    e.preventDefault();
    moreDetailsDisplay.innerText = testQuestions[questionNumber - 1].more
    moreDetailsDisplay.style.textDecoration = "none";
})
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
    let user_votes = [];
    for (let x in testQuestions){
        user_votes.push(testQuestions[x]["answer"]);
    }
    console.log(user_votes);
    localStorage.setItem("user_votes", JSON.stringify(user_votes));
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
    testQuestions[questionNumber - 1].answer = 1;
    answerDisplay.innerText = testQuestions[questionNumber - 1].yesAnswer;

});
noButton.addEventListener("click", e => {
    e.preventDefault();
    flushAllRadioButtons();
    noButton.style.backgroundColor = "#2B2B2B";
    testQuestions[questionNumber - 1].answer = -1;
    answerDisplay.innerText = testQuestions[questionNumber - 1].noAnswer;
});
neutralButton.addEventListener("click", e => {
    e.preventDefault();
    flushAllRadioButtons();
    neutralButton.style.backgroundColor = "#2B2B2B";
    testQuestions[questionNumber - 1].answer = 0;
    answerDisplay.innerText = testQuestions[questionNumber - 1].neutralAnswer;
});



