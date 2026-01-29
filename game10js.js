const feedback = document.getElementById("feedback");
const leafImage = document.getElementById("leafImage");
const nextButton = document.getElementById("nextButton");

leafImage.style.display = "none";
nextButton.style.display = "none";

function checkAnswer(index) {
  if (index === 1) {
    let score = Number(localStorage.getItem("score"));
    score++;
    localStorage.setItem("score", score);

    feedback.innerHTML =
      "✅ <b>Benar!</b><br>Bunyi dapat merambat melalui berbagai media, seperti udara, air, dan benda padat.";
    feedback.style.color = "green";

    leafImage.src = "gelombangsuara.jpg";
    leafImage.style.display = "block";
  }
  else {
    feedback.innerHTML =
      "❌ <b>Salah!</b><br><b>Jawaban yang benar adalah:</b> Bunyi dapat merambat melalui <b>benda padat, cair, dan gas</b>.";
    feedback.style.color = "red";

    leafImage.src = "gelombangsuara.jpg";
    leafImage.style.display = "block";
  }
  nextButton.style.display = "inline-block";

  disableAnswers();
}
  nextButton.addEventListener("click", () => {
  window.location.href = "result.html";
  });

  function disableAnswers() {
    const buttons = document.querySelectorAll(".answers button");
    buttons.forEach(btn => btn.disabled = true);
  }
