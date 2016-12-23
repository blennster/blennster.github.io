function submit() {
  var namn = document.getElementById("nameInput").value;
  var pass = document.getElementById("passInput").value;
  if (namn == "David" && pass == "davble") {
    window.location = "david.html";
  }
  else if (namn == "Hanna" && pass == "hanble") {
    window.location = "hanna.html";
  }
  else if (namn == "Bästa föräldrarna" && pass == "12") {
    window.location = "morochfar.html";
  }
  else {
    alert("Fel namn eller lösenord");
  }
}
