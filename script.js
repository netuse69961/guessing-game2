let currentStage = 1;
let stages = [
    { max: 10, hint: "الرقم هو نصف عدد أصابع اليد الواحدة.", answer: 5, attempts: 3 },
    { max: 10, hint: "الرقم هو عدد شهور السنة مقسوم على اثنين.", answer: 6, attempts: 3 },
    { max: 10, hint: "الرقم هو عدد الأقدام في زوج من الطيور.", answer: 2, attempts: 3 },
    { max: 10, hint: "الرقم هو مجموع أصابع اليدين.", answer: 10, attempts: 3 },
    { max: 10, hint: "الرقم هو عدد العجلات في سيارة.", answer: 4, attempts: 3 }
];
let remainingAttempts = stages[0].attempts;

function checkGuess() {
    const guessInput = document.getElementById("guess-input");
    const resultElement = document.getElementById("result");
    const hintElement = document.getElementById("hint");

    const guess = parseInt(guessInput.value);
    if (isNaN(guess)) {
        resultElement.textContent = "يرجى إدخال رقم صحيح.";
        return;
    }

    const currentAnswer = stages[currentStage - 1].answer;
    if (guess === currentAnswer) {
        if (currentStage < stages.length) {
            resultElement.textContent = "صحيح! الانتقال للمرحلة التالية!";
            currentStage++;
            loadStage();
        } else {
            resultElement.textContent = "مبروك! لقد أتممت اللعبة!";
        }
    } else {
        remainingAttempts--;
        if (remainingAttempts > 0) {
            resultElement.textContent = `خطأ! محاولات متبقية: ${remainingAttempts}`;
        } else {
            resultElement.textContent = "انتهت المحاولات. إعادة المرحلة.";
            remainingAttempts = stages[currentStage - 1].attempts;
        }
    }

    guessInput.value = "";
}

function loadStage() {
    const stageDescription = document.getElementById("stage-description");
    const hintElement = document.getElementById("hint");
    const rangeMin = document.getElementById("range-min");
    const rangeMax = document.getElementById("range-max");

    let currentStageInfo = stages[currentStage - 1];
    stageDescription.textContent = `المرحلة ${currentStage}`;
    hintElement.textContent = `التلميح: ${currentStageInfo.hint}`;
    rangeMin.textContent = 1;
    rangeMax.textContent = currentStageInfo.max;
    remainingAttempts = currentStageInfo.attempts;
}

loadStage();
