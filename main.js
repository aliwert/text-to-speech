const pronunciation = () => {
  let text = document.getElementById("input").value;
  let speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
};


document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    pronunciation();
  }
});
