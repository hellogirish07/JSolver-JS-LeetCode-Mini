// Render problem list
const listContainer = document.getElementById("problem-list");
const searchInput = document.getElementById("searchInput");
const difficultyFilter = document.getElementById("difficultyFilter");

function renderProblems() {
  listContainer.innerHTML = "";

  const searchValue = searchInput.value.toLowerCase();
  const selectedDifficulty = difficultyFilter.value;

  problems.forEach((problem) => {
    const matchesSearch = problem.title.toLowerCase().includes(searchValue);
    const matchesDifficulty =
      selectedDifficulty === "all" ||
      problem.difficulty.toLowerCase() === selectedDifficulty;

    if (matchesSearch && matchesDifficulty) {
      const row = document.createElement("div");
      row.className = "problem-row";

      const isSolved = localStorage.getItem(`problem_${problem.id}_solved`);

      const solvedBadge =
        isSolved === "true" ? `<span class="solved-badge"> <i class='fas fa-check-circle'></i> </span>` : "";

      row.innerHTML = `
        <span class="title">
          ${solvedBadge}
          ${problem.id}. ${problem.title}
        </span>
        <span class="badge ${problem.difficulty.toLowerCase()}">
          ${problem.difficulty}
        </span>
      `;

      row.onclick = () => {
        window.location.href = `problem.html?id=${problem.id}`;
      };

      listContainer.appendChild(row);
    }
  });
}

renderProblems();

searchInput.addEventListener("input", renderProblems);
difficultyFilter.addEventListener("change", renderProblems);

// Header blur effect on scroll
const hero = document.querySelector(".hero");
const header = document.querySelector("header");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        header.classList.add("blur");
      } else {
        header.classList.remove("blur");
      }
    });
  },
  { threshold: 0.2 },
);

observer.observe(hero);

// Modal functionality
const overlay = document.getElementById("problemOverlay");
const openBtn = document.querySelector(".solve-btn");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});

// Close when clicking outside modal
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
  }
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll("#navLinks a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest("header")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});