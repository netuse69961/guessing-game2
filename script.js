let randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById('guessButton').addEventListener('click', function() {
    let userGuess = document.getElementById('guess').value;
    let result = document.getElementById('result');

    if (userGuess == randomNumber) {
        result.textContent = 'صحيح! لقد خمنت الرقم!';
    } else if (userGuess < randomNumber) {
        result.textContent = 'الرقم أكبر من ذلك. حاول مرة أخرى!';
    } else {
        result.textContent = 'الرقم أقل من ذلك. حاول مرة أخرى!';
    }
});
