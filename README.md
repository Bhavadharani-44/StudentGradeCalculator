# StudentGradeCalculator

A simple Student Grade Calculator built with plain HTML, CSS and JavaScript.
Enter a student's name and marks for five subjects, and the page calculates the
total, the average, the letter grade and a pass/fail status.

No frameworks, no build step and no external libraries — just open the file in a
browser.

## Features

- Student name input
- Five subject mark inputs
- Calculates the total (out of 500)
- Calculates the average percentage
- Displays a letter grade and pass/fail status
- Validates that every mark is a number between 0 and 100
- Reset button to clear the form

## Project Structure

```
StudentGradeCalculator/
├── index.html    # Page structure: the form, the inputs and the result block
├── style.css     # Styling for the layout, buttons, error and result boxes
├── script.js     # Validation and calculation logic (commented throughout)
└── README.md     # This file
```

## Setup

There is nothing to install and nothing to build.

1. Clone the repository:

   ```bash
   git clone https://github.com/Bhavadharani-44/StudentGradeCalculator.git
   ```

2. Move into the project folder:

   ```bash
   cd StudentGradeCalculator
   ```

3. Open `index.html` in any modern web browser — double-click the file, or:

   ```bash
   # Windows
   start index.html

   # macOS
   open index.html
   ```

Optionally, serve it over a local web server (handy if you are editing the files
and want a normal `http://` address):

```bash
# Requires Python 3
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Usage

1. Type the student's name into the **Student Name** box.
2. Enter the marks for all five subjects. Each mark must be between 0 and 100.
3. Click **Calculate**.
4. The result panel shows the name, total, average, grade and status.
5. Click **Reset** to clear the form and start again.

If something is missing or out of range, a red message appears explaining what
to fix and the offending input is highlighted. The calculation runs only after
every value is valid.

### Example

| Field | Value |
|-------|-------|
| Name | Priya Sharma |
| Subject 1 | 85 |
| Subject 2 | 78 |
| Subject 3 | 92 |
| Subject 4 | 66 |
| Subject 5 | 74 |

Result: **Total** 395 / 500 · **Average** 79.00% · **Grade** B · **Status** Pass

## Grading Scale

The grade is based on the average of the five subjects:

| Average (%) | Grade |
|-------------|-------|
| 90 – 100 | A+ |
| 80 – 89 | A |
| 70 – 79 | B |
| 60 – 69 | C |
| 50 – 59 | D |
| Below 50 | F |

A student passes when the average is 50% or above.

## Validation Rules

- The student name cannot be empty or only spaces.
- Every subject mark is required.
- Each mark must be a number.
- Each mark must be between 0 and 100 (inclusive).

## Browser Support

Works in any modern browser (Chrome, Firefox, Edge, Safari). No internet
connection is needed once the files are on your machine.
