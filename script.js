let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', function() {
    let userGuess = parseInt(document.getElementById('guess').value);
    let result = document.getElementById('result');
    attempts++;

    if (userGuess === randomNumber) {
        result.textContent = `مبروك! لقد خمنت الرقم ${randomNumber} في ${attempts} محاولة! 🎉`;
        result.style.color = 'green';
        showRestartButton();
    } else if (userGuess < randomNumber) {
        result.textContent = 'الرقم أكبر من ذلك. حاول مرة أخرى!';
        result.style.color = 'orange';
    } else {
        result.textContent = 'الرقم أقل من ذلك. حاول مرة أخرى!';
        result.style.color = 'orange';
    }

    document.getElementById('guess').value = ''; // مسح المدخلات بعد كل محاولة
});

function showRestartButton() {
    document.getElementById('restartButton').style.display = 'inline-block';
}

document.getElementById('restartButton').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById('guess').value = ''; // إعادة تعيين المدخلات
});
