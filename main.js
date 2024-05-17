// define a function named pronunciation using arrow function syntax
const pronunciation = () => {
  // retrieve the value of the input element with the id "input"
  let text = document.getElementById("input").value;
  
  // create a new SpeechSynthesisUtterance object with the retrieved text
  let speech = new SpeechSynthesisUtterance(text);
  
  // use the speech synthesis API to speak the utterance
  speechSynthesis.speak(speech);
};

// add an event listener to the document for the "keypress" event
document.addEventListener("keypress", function (e) {
  // check if the key that was pressed is "Enter"
  if (e.key === "Enter") {
    // call the pronunciation function if "Enter" key is pressed
    pronunciation();
  }
});