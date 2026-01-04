const nama = localStorage.getItem("nama");

if (!nama) {
  window.location.href = "index.html";
}

document.getElementById("greeting").innerText =
  `Hai, ${nama}`;