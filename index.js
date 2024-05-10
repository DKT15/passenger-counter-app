// Getting the elements from the DOM.
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const saveEl = document.getElementById("save-para");

let count = 0;

//Increments the counter.
incrementBtn.addEventListener("click", function () {
  count += 1;
  countEl.innerText = count;
});

// Saves the numbers in the counter just below the buttons and sets the number back to 0.
saveBtn.addEventListener("click", function () {
  const saveResults = " " + count + " - ";
  saveEl.textContent += saveResults;
  countEl.textContent = 0;
  count = 0;
});
