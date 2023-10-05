// Letters
const letters = "abcdefghijklmnopqrstuvwxyz1234567890";
//generate array from letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");
// Generate Letters
lettersArray.forEach((letter) => {
  // generate span
  let span = document.createElement("span");
  //Generate Letter Text
  let theLetter = document.createTextNode(letter);
  // Append The Letters In Span
  span.appendChild(theLetter);
  // Add Class On Span
  span.className = "letter-box";
  // Append Spans To The Letter Container
  lettersContainer.appendChild(span);
});
// Object Of Words + Categories
const words = {
  programming: [
    "php",
    "JavaScript",
    "go",
    "Scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Presige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "ALexandar",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};
// Get Random Property
let allKeys = Object.keys(words);
// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
// Category
let randomPropName = allKeys[randomPropNumber];
// Category Words
let randomPropValue = words[randomPropName];
// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
// The Chosen Word
let randomValueValue = randomPropValue[randomValueNumber];
// Set CateogryInfo
document.querySelector(".game-info .category span").innerHTML = randomPropName;
// Select Letter Guess Container
let LetterGuessContainer = document.querySelector(".letters-guess");
// Convert Chosen Word To Array
let LettersAndSpace = Array.from(randomValueValue);
// Create Spans Depend On Words
LettersAndSpace.forEach((letter) => {
  // Create Empty Span
  let emptySpan = document.createElement("span");
  if (letter === " ") {
    // Add Class To The Span
    emptySpan.className = "has-space";
  }
  //  Append Span To Letters Guess Container
  LetterGuessContainer.appendChild(emptySpan);
});
// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");
// Set Wrong Attempts
let wrongAttempts = 0;
// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

// Handle Clicking On Letters
document.addEventListener("click", (e) => {
  // Set The Selection Status
  let theStatus = false;

  if ((e.target.className = "letter-box")) {
    e.target.classList.add("clicked");
    // Get Clicked Letter
    let clickedLetter = e.target.innerHTML.toLowerCase();
    // Chosen Word
    let chosenWord = Array.from(randomValueValue.toLowerCase());
    chosenWord.forEach((wordLetter, wordIndex) => {
      // check if the clicked letter equal to one of the chosen word letters
      if (clickedLetter === wordLetter) {
        // Set Status To True
        theStatus = true;
        //  Loop On All Guess Spans
        guessSpans.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = wordLetter;
          }
        });
      }
    });
    // Outside Loop
    if (theStatus !== true) {
      wrongAttempts++;
      //  Add Class Wrong On The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);
     
      //   Fail Sound Played
      document.getElementById("fail").play();
      
       
      if (wrongAttempts === 8 ) {
        // Select Container
        let container = document.querySelector(".container");
        container.style.opacity = "0.3";
        endGame();

        lettersContainer.classList.add("finished");
      }
    } else {
      document.getElementById("success").play();
    }
  }
});



function endGame() {
  // Create PopUp
  let div = document.createElement("div");
  // Create PopUp text
  let divText = document.createTextNode(
    `Game Over, The Word Is ${randomValueValue}`
  );
//   Append Text To Div
  div.append(divText);
 



  // Add Class On Div
  div.className = "popup";
  // Append To The Body
  document.body.appendChild(div);

}
