const feedback = document.getElementById("feedback");
const leafImage = document.getElementById("leafImage");
const nextButton = document.getElementById("nextButton");
const stopButton = document.getElementById("stopButton");

leafImage.style.display = "none";
nextButton.style.display = "none";
stopButton.style.display = "none";

function checkAnswer(index) {
  if (index === 0) {
    let score = Number(localStorage.getItem("score"));
    score++;
    localStorage.setItem("score", score);

    feedback.innerHTML =
      "✅ <b>Benar!</b><br>Paru-paru berfungsi untuk bernapas, yaitu menghirup oksigen dan mengeluarkan karbon dioksida.";
    feedback.style.color = "green";
    leafImage.src = "paruparu.jpeg";
    leafImage.style.display = "block";
  }
  else {
    feedback.innerHTML =
      "❌ <b>Salah!</b><br><b>Jawaban yang benar adalah:</b> Paru-paru berfungsi untuk bernapas (menghirup oksigen dan mengeluarkan karbon dioksida).";
    feedback.style.color = "red";

    leafImage.src = "paruparu.jpeg";
    leafImage.style.display = "block"
    }
    nextButton.style.display = "inline-block";
    stopButton.style.display = "inline-block";

    disableAnswers();
  }

  nextButton.addEventListener("click", () => {
  window.location.href = "game5.html";
  });

  stopButton.addEventListener("click", () => {
  window.location.href = "home.html";
  });

  function disableAnswers() {
    const buttons = document.querySelectorAll(".answers button");
    buttons.forEach(btn => btn.disabled = true);
  }

  