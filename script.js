/* =========================================================
   Student Grade Calculator
   ---------------------------------------------------------
   The script does four things:
     1. Reads the name and the five subject marks from the page
     2. Validates that every mark is a number between 0 and 100
     3. Calculates the total, the average and the grade
     4. Writes the result back into the page
   ========================================================= */

/* ---------- Step 1: Grab the elements we need ----------
   document.getElementById() finds an element by its id attribute.
   We store them in constants so we do not have to look them up
   again every time the user clicks Calculate. */
const form = document.getElementById("gradeForm");
const resetBtn = document.getElementById("resetBtn");
const nameInput = document.getElementById("studentName");
const errorBox = document.getElementById("errorMessage");
const resultBox = document.getElementById("result");

/* document.querySelectorAll() returns a list of ALL elements that
   match the selector. Every mark input has class="mark", so this
   gives us the five subject boxes in the order they appear. */
const markInputs = document.querySelectorAll(".mark");

/* The highest mark a single subject can have. Written as a constant
   so the rule lives in one place and is easy to change later. */
const MAX_MARK = 100;

/* ---------- Step 2: Listen for the form being submitted ----------
   "submit" fires when the Calculate button is clicked or when the
   user presses Enter inside the form. */
form.addEventListener("submit", function (event) {
  // Stop the browser from reloading the page, which is its default
  // behaviour when a form is submitted.
  event.preventDefault();
  calculateGrade();
});

// The Reset button clears everything back to a blank form.
resetBtn.addEventListener("click", resetForm);

/* =========================================================
   Main function: runs the whole calculation
   ========================================================= */
function calculateGrade() {
  // Start each run with a clean slate: no old errors, no old result.
  hideMessages();

  /* ---------- Validate the name ----------
     .trim() removes spaces from both ends, so a name of only
     spaces is treated as empty. */
  const studentName = nameInput.value.trim();

  if (studentName === "") {
    showError("Please enter the student's name.");
    nameInput.classList.add("invalid");
    return; // stop here, there is nothing to calculate
  }

  /* ---------- Validate the marks ----------
     We loop through the five inputs one at a time and collect the
     valid numbers into an array. If any input fails a check we show
     a message and stop immediately. */
  const marks = [];

  for (let i = 0; i < markInputs.length; i++) {
    const input = markInputs[i];
    const rawValue = input.value.trim();
    const subjectNumber = i + 1; // i starts at 0, subjects start at 1

    // Check 1: the box must not be empty.
    if (rawValue === "") {
      showError("Please enter the marks for Subject " + subjectNumber + ".");
      input.classList.add("invalid");
      return;
    }

    // Check 2: the value must be a real number.
    // Number() turns the text into a number, or into NaN
    // ("Not a Number") when the text is not numeric.
    const mark = Number(rawValue);

    if (isNaN(mark)) {
      showError("Subject " + subjectNumber + " must be a number.");
      input.classList.add("invalid");
      return;
    }

    // Check 3: the number must sit between 0 and 100.
    if (mark < 0 || mark > MAX_MARK) {
      showError(
        "Subject " + subjectNumber + " must be between 0 and " + MAX_MARK + "."
      );
      input.classList.add("invalid");
      return;
    }

    // The mark passed every check, so keep it.
    marks.push(mark);
  }

  /* ---------- Do the maths ----------
     Add every mark together to get the total. */
  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
  }

  // Average = total divided by how many subjects there are.
  const average = total / marks.length;

  // Work out the letter grade from the average.
  const grade = getGrade(average);

  // A student passes when the average reaches 50.
  const status = average >= 50 ? "Pass" : "Fail";

  /* ---------- Show the result ----------
     .toFixed(2) rounds the average to two decimal places and
     returns it as text, e.g. 78.5 becomes "78.50". */
  document.getElementById("outName").textContent = studentName;
  document.getElementById("outTotal").textContent = total;
  document.getElementById("outAverage").textContent = average.toFixed(2);
  document.getElementById("outGrade").textContent = grade;
  document.getElementById("outStatus").textContent = status;

  // Removing the "hidden" class makes the result block visible.
  resultBox.classList.remove("hidden");
}

/* =========================================================
   Helper: turn an average into a letter grade
   ---------------------------------------------------------
   The checks run from highest to lowest. Because each branch
   ends the chain, reaching "else if (average >= 80)" already
   means the average was below 90.
   ========================================================= */
function getGrade(average) {
  if (average >= 90) {
    return "A+";
  } else if (average >= 80) {
    return "A";
  } else if (average >= 70) {
    return "B";
  } else if (average >= 60) {
    return "C";
  } else if (average >= 50) {
    return "D";
  } else {
    return "F";
  }
}

/* =========================================================
   Helper: display an error message
   ========================================================= */
function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.remove("hidden");
}

/* =========================================================
   Helper: clear old errors and results before a new run
   ========================================================= */
function hideMessages() {
  errorBox.classList.add("hidden");
  resultBox.classList.add("hidden");

  // Remove the red outline from any input marked invalid earlier.
  nameInput.classList.remove("invalid");

  for (let i = 0; i < markInputs.length; i++) {
    markInputs[i].classList.remove("invalid");
  }
}

/* =========================================================
   Helper: empty the form completely
   ========================================================= */
function resetForm() {
  form.reset();      // built-in method that clears every input
  hideMessages();    // also clear errors and the old result
  nameInput.focus(); // put the cursor back in the first box
}
