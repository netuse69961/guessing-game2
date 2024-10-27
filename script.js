let randomNumber = Math.floor(Math.random() * 100) + 1; // الرقم العشوائي بين 1 و 100
let attempts = 0;

document.getElementById('submitGuess').addEventListener('click', function() {
    let userGuess = parseInt(document.getElementById('guess').value); // تحويل المدخل إلى عدد صحيح
    attempts++; // زيادة عدد المحاولات

    if (isNaN(userGuess)) {
        document.getElementById('result').innerHTML = "يرجى إدخال رقم صحيح!";
    } else if (userGuess < randomNumber) {
        document.getElementById('result').innerHTML = "رقمك أقل من الرقم الصحيح!";
        document.getElementById('failureSound').play(); // تشغيل صوت الفشل
    } else if (userGuess > randomNumber) {
        document.getElementById('result').innerHTML = "رقمك أكبر من الرقم الصحيح!";
        document.getElementById('failureSound').play(); // تشغيل صوت الفشل
    } else {
        document.getElementById('result').innerHTML = `مبروك! لقد خمنت الرقم الصحيح ${randomNumber} في ${attempts} محاولة!`;
        document.getElementById('successSound').play(); // تشغيل صوت النجاح
    }

    // إعادة تعيين المدخل بعد كل محاولة
    document.getElementById('guess').value = '';
});
