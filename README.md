# The JavaScript Tutorial
This repository goes with the Learn JavaScript tutorial series at:<br>
<a href="https://www.learnbycheating.com/subjects/javascript">learnbycheating.com/subjects/javascript</a>

The Web version of the CheatSheet for JavaScript is at:<br>
  <a href="https://www.learnbycheating.com/subjects/javascript/cheatsheet">learnbycheating.com/subjects/javascript/cheatsheet</a>

------------------------------------------------------------

## 1. Tutorial Files and Folders

Each tutorial in the series includes example code. 

To follow along, copy/paste or type the code in a JavaScript file. For the later tutorials and the project there are also HTML and module files.

The code from each tutorial is also in this project in either:
  - Stand-alone JavaScript files (e.g., arrays.js, classes.js, conditionals.js, etc.).
  - Or directories containing JavaScript, HTML, and module files (e.g., dom, errors, event-loop, etc.). 

There are also two Project folders where you use JavaScript and HTML to create a working To-Do list application. There are two versions of this project: 
  - ToDo-List-Beginning.
  - ToDo-List-Intermediate. 

------------------------------------------------------------

## 2. How to run the code from the tutorials

### 2a. Run JS statements in the Terminal with Node.js
You can run JavaScript code snippets directly in the Terminal if you have Node.js installed. 

Open your Command Line application. If you are using VS Code as your text editor, Click the Terminal menu and select New Terminal.

Open the node application by entering: `node`

If Node.js is installed on your computer it will give you a prompt. Then you can just start entering JavaScript statements.  
``` js
const x = 7;
x + 3; // returns 10
```

If it returns "Command not found" then you need to install Node.js. Go to [nodejs.org](https://nodejs.org/en) and download and install the LTS version.

------------------------------------------------------------

### 2b. Run JS files from the Terminal with Node.js

Put JavaScript code snippets in a JavaScript file. Then run the file with Node.js: `node filename`

To view variable values, use `console.log()` to log variable and expression values to the Terminal.

``` js
const x = 7;
const res = x + 3;
console.log(res); // logs 10
```

------------------------------------------------------------

### 2c. Run JS files with VS Code Debugger using Node.js

Put JavaScript code snippets in a JavaScript file then view variable values using the VS Code Debugger.

- <b>Add Variables:</b> Assign variables to expression values you want to view.
- <b>Breakpoints:</b> Enter Breakpoints by clicking left of the line number in the Editor window. Breakpoints are indicated with red dots. The code will pause on the breakpoint and continue when you click the Continue icon on the Debug Toolbar. You can also use the `debugger;` statement to create a breakpoint.
- <b>Open the Run and Debug sidebar:</b> Click the Run and Debug icon to open the Run and Debug sidebar.
- <b>Run and Debug:</b> Click the Run and Debug button. Then select Node.js from the dropdown menu.
- <b>View variable values:</b> When the code pauses at a breakpoint, all the variables can be viewed in the Debug sidebar grouped by scope (e.g., block, local, global). 
- <b>The Debug Toolbar:</b> The Debug Toolbar includes icon buttons to continue to the next breakpoint, restart the debugger, and Stop the debugger.

``` js
const x = 7;
const res = x + 3;
debugger; // View variable x and res values in the Debug sidebar.
```

------------------------------------------------------------

### 2d. Run HTML and JS files with VS Code Debugger using Chrome or Edge

Create an HTML file with JavaScript either embedded in the HTML file, or in a separate JavaScript file linked to the HTML file by the <i>script</i> tag.

- <b>Add Variables:</b> In the JavaScript, assign variables to expression values you want to view.
- <b>Breakpoints:</b> Enter Breakpoints by clicking left of the line number in the Editor window. Breakpoints are indicated with red dots. The code will pause on the breakpoint and continue when you click the Continue icon on the Debug Toolbar.
- <b>Open the Run and Debug sidebar:</b> Click the Run and Debug icon to open the Run and Debug sidebar.
- <b>Swith to the HTML file:</b> Open the HTML file in the editor.
- <b>Run and Debug:</b> Click the Run and Debug button. Then select Web App (Chrome) or Web App (Edge).
- <b>View variable values:</b> When the code pauses at a breakpoint, all the variables can be viewed in the Debug sidebar grouped by scope (e.g., block, local, global).
- <b>The Debug Toolbar:</b> The Debug Toolbar includes icon buttons to continue to the next breakpoint, restart the debugger, and stop the debugger.
- <b>View console logs:</b> Since the debugger is running in the Browser, to view console logs open the Console with command: Option + ⌘ + J (on macOS), or Shift + CTRL + J (on Windows/Linux). Select the console tab.

------------------------------------------------------------

### 2e. Run the tutorial files in this repository

This repository has a file or folder for each tutorial. You can run the file with the VS Code Debugger using the same instructions as above. Insert breakpoints to view the variable values.

In most of the files the topics are segregated into numbered <i>if</i> blocks. That keeps the variables and functions in their own scope. There is a topicId variable at the top of the file. Change the topicId value to the topic you want to run before running the debugger.

``` js
const topicId = 1; // Enter the current topic number.

// 1. Topic name.
if (topicId === 1) {
  // Topic code goes here.
}

// 2. Topic name.
if (topicId === 2) {
  // Topic code goes here.
}
```

------------------------------------------------------------
