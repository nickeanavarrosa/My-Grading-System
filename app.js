const midtermGrade = document.getElementById("midterm-grade");
const finalsGrade = document.getElementById("finals-grade")
const extraCreditChk = document.getElementById("extra-credit-chk");
const computeBtn = document.getElementById("compute-btn");
const outputMatrix = document.getElementById("output-matrix");

function calculateGradePayLoad() {

    const trimmedInput = midtermGrade.value.trim();
    const trimmedInput = finalsGrade.value.trim();

    let rawScore = Number(trimmedInput);

    if (trimmedInput === "") {
        outputMatrix.innerHTML ="<strong class='text-danger'>Error: PLease enter a valid number.</strong>";
        return;
    } else if (isNaN(rawScore)) {
        outputMatrix.innerHTML ="<strong class='text-danger'>Error: PLease enter a valid number.</strong>";
        return;
    } else if (rawScore < 0) {
        outputMatrix.innerHTML ="<strong class='text-danger'>Range Violation: Score Must be between 0 and 100.</strong>";
        return;
    } else if (rawScore > 100) {
        outputMatrix.innerHTML ="<strong class='text-danger'>Range Violation: Score Must be between 0 and 100.</strong>";
        return;
    }

    let finalScore = 0;
    if (extraCreditChk.checked) {
        finalScore = rawScore + 5;
    } else {
        finalScore = rawScore;
    }

    if (finalScore > 100) {
        finalScore = 100;
    }

    let statusText = "";
    let statusColorClass = "";

    if (finalScore >= 75) {
        statusText = "Passed!";
        statusColorClass = "text-success";
    } else {
        statusText = "Failed";
        statusColorClass = "text-danger";
    }

    outputMatrix.innerHTML = "<h4>Final Score: " + finalScore + "</h4>" +
                             "<h1 class='display-4 " + statusColorClass + " font-bold'>" + statusText + "<h1>";
}

computeBtn.addEventListener("click", calculateGradePayLoad);5
