// إنشاء رقم سري عشوائي بين 1 و 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const guess = parseInt(guessInput.value);
  attempts++;

  if (isNaN(guess)) {
    message.textContent = "الرجاء إدخال رقم صحيح.";
  } else if (guess < secretNumber) {
    message.textContent = "رقمك أصغر من الرقم السري. حاول مجددًا!";
  } else if (guess > secretNumber) {
    message.textContent = "رقمك أكبر من الرقم السري. حاول مجددًا!";
  } else {
    message.textContent = `مبروك! لقد خمنت الرقم بشكل صحيح بعد ${attempts} محاولات.`;
  }

  guessInput.value = ""; // لإعادة تعيين الحقل
}
