localStorage.setItem("score", 0);
localStorage.setItem("currentGame", 1);

const feedback = document.getElementById("feedback");
const catImage = document.getElementById("catImage");
const nextButton = document.getElementById("nextButton");
const stopButton = document.getElementById("stopButton");

catImage.style.display = "none";
nextButton.style.display = "none";
stopButton.style.display = "none";

function checkAnswer(index) {

  if (index === 1) {

    let score = Number(localStorage.getItem("score"));
    score++;
    localStorage.setItem("score", score);

    feedback.innerHTML = "✅ <b>Benar!</b> Kucing adalah hewan <b>karnivora</b>.";
    feedback.style.color = "green";

    catImage.src = "kucing2.png";
    catImage.style.display = "block";

    nextButton.style.display = "inline-block";
    stopButton.style.display = "inline-block";

  } 
  else {
    feedback.innerHTML =
      "❌ Salah!<br><b>Jawaban yang benar adalah:</b> Kucing adalah hewan <b>karnivora</b>.";
    feedback.style.color = "red";

    catImage.src = "kucing2.png";
    catImage.style.display = "block";

    nextButton.style.display = "inline-block";
    stopButton.style.display = "inline-block";
  }
  disableAnswers();
}

nextButton.addEventListener("click", () => {
  window.location.href = "game2.html";
});

stopButton.addEventListener("click", () => {
  window.location.href = "home.html";
});

function disableAnswers() {
  const buttons = document.querySelectorAll(".answers button");
  buttons.forEach(btn => btn.disabled = true);
}