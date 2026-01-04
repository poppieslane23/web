  const feedback = document.getElementById("feedback");
  const catImage = document.getElementById("catImage");
  const nextButton = document.getElementById("nextButton");
  const stopButton = document.getElementById("stopButton");
  const tryButton = document.getElementById("tryButton");

  function checkAnswer(index) {
  if (index === 1) {
    feedback.innerHTML = "✅ <b>Benar!</b> Kucing adalah hewan karnivora karena memakan daging.";
    feedback.style.color = "green";
    catImage.style.display = "block";
    nextButton.style.display = "inline-block";
    stopButton.style.display ="inline-block";
    tryButton.style.display = "none";
  }
  else {
    feedback.innerHTML = "❌ Salah! Coba lagi.";
    feedback.style.color = "red";
    catImage.style.display = "none";
    nextButton.style.display ="none";
    stopButton.style.display ="inline-block";
    tryButton.style.display ="inline-block";
    }
  }

  nextButton.addEventListener("click", () => {
  window.location.href = "game2.html";
});

  stopButton.addEventListener("click", () => {
  window.location.href = "home.html";
});

 tryButton.addEventListener("click", () => {
  feedback.innerHTML = "";
  catImage.style.display = "none";
  tryButton.style.display = "none";
  stopButton.style.display = "none";
});


