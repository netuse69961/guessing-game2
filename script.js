let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submitGuess').addEventListener('click', function() {
    let userGuess = document.getElementById('guess').value;
    attempts++;

    if (userGuess < randomNumber) {
        document.getElementById('result').innerHTML = "رقمك أقل من الرقم الصحيح!";
        document.getElementById('failureSound').play(); // تشغيل صوت الفشل
    } else if (userGuess > randomNumber) {
        document.getElementById('result').innerHTML = "رقمك أكبر من الرقم الصحيح!";
        document.getElementById('failureSound').play(); // تشغيل صوت الفشل
    } else {
        document.getElementById('result').innerHTML = `مبروك! لقد خمنت الرقم الصحيح ${randomNumber} في ${attempts} محاولة!`;
        document.getElementById('successSound').play(); // تشغيل صوت النجاح
    }
});
