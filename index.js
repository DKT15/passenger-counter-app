// Getting the elements from the DOM.
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const saveEl = document.getElementById("save-para");

let count = 0;

//Increments the counter.
function counter() {
  count += 1;
  countEl.innerText = count;
}

// Saves the numbers in the counter just below the buttons and sets the number back to 0.
function save() {
  const saveResults = " " + count + " - ";
  saveEl.textContent += saveResults;
  countEl.textContent = 0;
  count = 0;
}

// when the button is clicked the counter function above is executed.
incrementBtn.addEventListener("click", counter);

// when the save button is clicked the number is saved.
saveBtn.addEventListener("click", save);
