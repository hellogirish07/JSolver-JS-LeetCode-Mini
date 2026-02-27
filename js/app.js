// Get problem id from URL
const params = new URLSearchParams(window.location.search);
const problemId = Number(params.get("id"));

// Find problem
const problem = problems.find((p) => p.id === problemId);

// Elements
const titleEl = document.getElementById("problem-title");
const diffEl = document.getElementById("problem-difficulty");
const descEl = document.getElementById("problem-description");
const sigEl = document.getElementById("function-signature");
const examplesEl = document.getElementById("examples");
const testCasesEl = document.getElementById("test-cases");
const editorEl = document.getElementById("code-editor");
const submitBtn = document.getElementById("submit-btn");

// Initialize CodeMirror first
const editor = CodeMirror.fromTextArea(editorEl, {
  mode: "javascript",
  // theme: "monokai",
  theme: "darcula",
  lineNumbers: true,
  indentUnit: 2,
  tabSize: 2,
  autoCloseBrackets: true,
  autoIndent: true,
  smartIndent: true,
});

editor.setSize("100%", "500px");

// If invalid ID
if (!problem) {
  titleEl.innerText = "Problem not found ❌";
} else {
  titleEl.innerText = `${problem.id}. ${problem.title}`;

  diffEl.innerText = problem.difficulty;
  diffEl.classList.add(problem.difficulty.toLowerCase());

  descEl.innerText = problem.description.trim();
  sigEl.innerText = problem.functionSignature;

  // Render examples
  if (
    examplesEl &&
    Array.isArray(problem.examples) &&
    problem.examples.length > 0
  ) {
    examplesEl.innerText = problem.examples
      .map(
        (ex, idx) =>
          `Example ${idx + 1}:\nInput: ${ex.input}\nOutput: ${ex.output}`,
      )
      .join("\n\n");
  }

  // Render test cases
  if (
    testCasesEl &&
    Array.isArray(problem.testCases) &&
    problem.testCases.length > 0
  ) {
    testCasesEl.innerText = problem.testCases
      .map(
        (tc, idx) =>
          `Test ${idx + 1}:\nInput: ${JSON.stringify(tc.input)}\nExpected: ${JSON.stringify(tc.expectedOutput)}`,
      )
      .join("\n\n");
  }

  // Pre-fill editor with function signature
  // Load saved submitted code if exists
  const savedCode = localStorage.getItem(`submitted_code_${problem.id}`);

  if (savedCode) {
    editor.setValue(savedCode);
  } else {
    editor.setValue(problem.functionSignature);
  }

  // Mark as solved if already submitted
  const isSolved = localStorage.getItem(`problem_${problem.id}_solved`);

  if (isSolved === "true") {
    diffEl.innerHTML += " <i class='fas fa-check-circle'></i>";
  }
}

const runBtn = document.getElementById("run-btn");
const outputEl = document.getElementById("output");

runBtn.addEventListener("click", () => {
  outputEl.innerText = "Running... ⏳";

  const userCode = editor.getValue();

  const result = runUserCode(userCode, problem.functionName, problem.testCases);

  if (result.status === "Accepted" || result.status === "Wrong Answer") {
    let outputText = "";

    result.results.forEach((test) => {
      outputText +=
        `Test ${test.index}:\n` +
        `Input: ${JSON.stringify(test.input)}\n` +
        `Expected: ${JSON.stringify(test.expected)}\n` +
        `Got: ${JSON.stringify(test.received)}\n\n`;
    });

    outputText += `✔ ${result.passed} / ${result.total} test cases passed`;

    outputEl.innerText = outputText;

    if (result.status === "Accepted") {
      submitBtn.disabled = false;
      submitBtn.classList.add("enabled");
    } else {
      submitBtn.disabled = true;
      submitBtn.classList.remove("enabled");
    }
  } else if (result.status === "Wrong Answer") {
    outputEl.innerText =
      `❌ Wrong Answer\n\n` +
      `Input: ${JSON.stringify(result.input)}\n` +
      `Expected: ${JSON.stringify(result.expected)}\n` +
      `Received: ${JSON.stringify(result.received)}`;

    // ❌ Disable Submit again
    submitBtn.disabled = true;
    submitBtn.classList.remove("enabled");
  } else {
    outputEl.innerText = `⚠ Runtime Error\n\n${result.error}`;

    submitBtn.disabled = true;
    submitBtn.classList.remove("enabled");
  }
});

submitBtn.addEventListener("click", () => {
  const userCode = editor.getValue();

  // 1️⃣ Save submitted code
  localStorage.setItem(`submitted_code_${problem.id}`, userCode);

  // 2️⃣ Mark problem as solved
  localStorage.setItem(`problem_${problem.id}_solved`, "true");

  outputEl.innerText =
    "🎉 Submitted Successfully!\n\nProblem marked as Solved ✅";
});

// Close button functionality
const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Toggle left panel functionality
const layout = document.querySelector(".problem-layout");
const hideBtn = document.getElementById("hidePanelBtn");
const showBtn = document.getElementById("showPanelBtn");

// Hide left panel
hideBtn.addEventListener("click", () => {
  layout.classList.add("collapsed");
  showBtn.style.display = "block";
});

// Show left panel
showBtn.addEventListener("click", () => {
  layout.classList.remove("collapsed");
  showBtn.style.display = "none";
});

// shoortcut to toggle panel with 'ctrl + B' key
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "b") {
    e.preventDefault();
    if (layout.classList.contains("collapsed")) {
      layout.classList.remove("collapsed");
      showBtn.style.display = "none";
    } else {
      layout.classList.add("collapsed");
      showBtn.style.display = "block";
    }
  }
});

// shortcut key for run code with 'ctrl + Enter'
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "Enter") {
    e.preventDefault();
    runBtn.click();
  }
});

// shortcut key for submit code with 'ctrl + S'
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    if (!submitBtn.disabled) {
      submitBtn.click();
    }
  }
});

// const layout = document.querySelector(".problem-layout");
const openEditorBtn = document.getElementById("openEditorBtn");
const closeEditorBtn = document.getElementById("closeEditorBtn");

if (openEditorBtn && closeEditorBtn) {

  openEditorBtn.addEventListener("click", () => {
    layout.classList.add("mobile-editor-active");
  });

  closeEditorBtn.addEventListener("click", () => {
    layout.classList.remove("mobile-editor-active");
  });

}
