  const feedback = document.getElementById("feedback");
  const leafImage = document.getElementById("leafImage");
  const nextButton = document.getElementById("nextButton");
  const stopButton = document.getElementById("stopButton");
  const tryButton = document.getElementById("tryButton");

  function checkAnswer(index) {
  if (index === 3) {
    feedback.innerHTML = "✅ <b>Benar!</b> Ovipar adalah hewan yang berkembang biak dengan cara bertelur, seperti ayam dan burung.";
    feedback.style.color = "green";
    leafImage.style.display = "block";
    nextButton.style.display = "inline-block";
    stopButton.style.display ="inline-block";
    tryButton.style.display = "none";
  }
  else {
    feedback.innerHTML = "❌ Salah! Coba lagi.";
    feedback.style.color = "red";
    leafImage.style.display = "none";
    nextButton.style.display ="none";
    stopButton.style.display ="inline-block";
    tryButton.style.display ="inline-block";
    }
  }

  nextButton.addEventListener("click", () => {
  window.location.href = "/pagesGames/game6.html";
});

  stopButton.addEventListener("click", () => {
  window.location.href = "/home/home.html";
});

  tryButton.addEventListener("click", () => {
  feedback.innerHTML = "";
  leafImage.style.display = "none";
  tryButton.style.display = "none";
  stopButton.style.display = "none";
});
