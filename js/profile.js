// Get DOM elements
const totalCountEl = document.getElementById("totalCount");
const solvedCountEl = document.getElementById("solvedCount");
const accuracyEl = document.getElementById("accuracy");
const easyBarEl = document.querySelector(".easy-bar");
const mediumBarEl = document.querySelector(".medium-bar");
const hardBarEl = document.querySelector(".hard-bar");
const editBtn = document.querySelector(".edit-btn");

// Function to calculate profile stats
function calculateStats() {
  // Count total problems by difficulty
  const problemsByDifficulty = {
    easy: problems.filter((p) => p.difficulty.toLowerCase() === "easy").length,
    medium: problems.filter((p) => p.difficulty.toLowerCase() === "medium")
      .length,
    hard: problems.filter((p) => p.difficulty.toLowerCase() === "hard").length,
  };

  // Count solved problems by difficulty
  const solvedByDifficulty = {
    easy: 0,
    medium: 0,
    hard: 0,
  };

  problems.forEach((problem) => {
    const isSolved =
      localStorage.getItem(`problem_${problem.id}_solved`) === "true";
    if (isSolved) {
      const difficulty = problem.difficulty.toLowerCase();
      solvedByDifficulty[difficulty]++;
    }
  });

  // Calculate totals
  const totalProblems = problems.length;
  const totalSolved = Object.values(solvedByDifficulty).reduce(
    (a, b) => a + b,
    0,
  );
  const accuracy =
    totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0;

  // Calculate progress percentages
  const easyProgress =
    problemsByDifficulty.easy > 0
      ? (solvedByDifficulty.easy / problemsByDifficulty.easy) * 100
      : 0;
  const mediumProgress =
    problemsByDifficulty.medium > 0
      ? (solvedByDifficulty.medium / problemsByDifficulty.medium) * 100
      : 0;
  const hardProgress =
    problemsByDifficulty.hard > 0
      ? (solvedByDifficulty.hard / problemsByDifficulty.hard) * 100
      : 0;

  return {
    totalProblems,
    totalSolved,
    accuracy,
    easyProgress,
    mediumProgress,
    hardProgress,
    solvedByDifficulty,
    problemsByDifficulty,
  };
}

// Function to update UI with stats
function updateProfileUI() {
  const stats = calculateStats();

  // Update counts and accuracy
  totalCountEl.innerText = stats.totalProblems;
  solvedCountEl.innerText = `${stats.totalSolved} / ${stats.totalProblems}`;
  accuracyEl.innerText = `${stats.accuracy}%`;

  // Update progress bars
  easyBarEl.style.width = `${stats.easyProgress}%`;
  mediumBarEl.style.width = `${stats.mediumProgress}%`;
  hardBarEl.style.width = `${stats.hardProgress}%`;

  // Add progress text labels
  //   const easyLabel = document.querySelector(".progress-item:nth-child(1) label");
  //   const mediumLabel = document.querySelector(".progress-item:nth-child(2) label");
  //   const hardLabel = document.querySelector(".progress-item:nth-child(3) label");

  const progressItems = document.querySelectorAll(".progress-item");

  const easyLabel = progressItems[0]?.querySelector("label");
  const mediumLabel = progressItems[1]?.querySelector("label");
  const hardLabel = progressItems[2]?.querySelector("label");

  if (easyLabel) {
    easyLabel.innerText = `Easy (${stats.solvedByDifficulty.easy} / ${stats.problemsByDifficulty.easy})`;
  }
  if (mediumLabel) {
    mediumLabel.innerText = `Medium (${stats.solvedByDifficulty.medium} / ${stats.problemsByDifficulty.medium})`;
  }
  if (hardLabel) {
    hardLabel.innerText = `Hard (${stats.solvedByDifficulty.hard} / ${stats.problemsByDifficulty.hard})`;
  }
}

// Initialize profile on page load
document.addEventListener("DOMContentLoaded", () => {
  updateProfileUI();
  renderSolvedProblems();
});

// Edit button functionality (placeholder for future enhancement)
editBtn.addEventListener("click", () => {
  alert("Edit Profile feature coming soon!");
});

// Refresh stats when returning to profile page (storage event)
window.addEventListener("storage", () => {
  updateProfileUI();
  renderSolvedProblems();
});

function renderSolvedProblems() {
  const solvedListEl = document.getElementById("solvedList");
  solvedListEl.innerHTML = "";

  if (!Array.isArray(problems)) return;

  const solvedProblems = problems.filter(problem =>
    localStorage.getItem(`problem_${problem.id}_solved`) === "true"
  );

  if (solvedProblems.length === 0) {
    solvedListEl.innerHTML = "<li>No problems solved yet.</li>";
    return;
  }

  solvedProblems.forEach(problem => {
    const li = document.createElement("li");

    const titleSpan = document.createElement("span");
    titleSpan.className = "problem-title";
    titleSpan.textContent = problem.title;

    const diffSpan = document.createElement("span");
    diffSpan.className = `problem-difficulty diff-${problem.difficulty.toLowerCase()}`;
    diffSpan.textContent = problem.difficulty;

    li.appendChild(titleSpan);
    li.appendChild(diffSpan);

    solvedListEl.appendChild(li);
  });
}
