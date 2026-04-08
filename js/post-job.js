document.addEventListener("DOMContentLoaded", () => {

  let currentStep = 1;
  const totalSteps = 4;

  const steps = document.querySelectorAll(".form-step");
  const sidebarSteps = document.querySelectorAll(".step");
  const progressFill = document.getElementById("progressFill");
  const progressLabel = document.getElementById("progressLabel");

  // SWITCH STEPS
  window.goToStep = function (step) {
    currentStep = step;

    steps.forEach(s => s.classList.remove("active"));
    document.getElementById(`step${step}`).classList.add("active");

    sidebarSteps.forEach(s => {
      s.classList.remove("active");
      if (Number(s.dataset.step) === step) {
        s.classList.add("active");
      }
    });

    const progress = (step / totalSteps) * 100;
    progressFill.style.width = `${progress}%`;
    progressLabel.textContent = `Step ${step} of ${totalSteps}`;

    if (step === 4) updateReview();
  };

  // CATEGORY PILLS
  document.querySelectorAll("#categoryPills .pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#categoryPills .pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // JOB TYPE PILLS
  document.querySelectorAll(".pills-wrap .pill").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.closest("#categoryPills")) return;

      const parent = btn.parentElement;
      parent.querySelectorAll(".pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // SKILL TAGS
  const skillInput = document.getElementById("skillInput");
  const tagList = document.getElementById("tagList");

  skillInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && skillInput.value.trim() !== "") {
      e.preventDefault();

      const skill = skillInput.value.trim();

      const tag = document.createElement("div");
      tag.className = "skill-tag";
      tag.innerHTML = `
        ${skill}
        <button>&times;</button>
      `;

      tag.querySelector("button").addEventListener("click", () => tag.remove());

      tagList.appendChild(tag);
      skillInput.value = "";
    }
  });

  // DATA REVIEW
  function updateReview() {
    document.getElementById("rv-title").textContent =
      document.getElementById("jobTitle").value || "—";

    document.getElementById("rv-company").textContent =
      document.getElementById("companyName").value || "—";

    document.getElementById("rv-location").textContent =
      document.getElementById("jobLocation").value || "—";

    document.getElementById("rv-desc").textContent =
      document.getElementById("jobDesc").value || "—";
  }

  // SUBMIT FORM
  window.submitForm = function () {
    const agree = document.getElementById("agreeTerms");

    if (!agree.checked) {
      alert("Please accept terms before submitting.");
      return;
    }

    steps.forEach(s => s.classList.remove("active"));
    document.getElementById("stepSuccess").classList.add("active");
  };

  // THEME TOGGLE
  const toggle = document.getElementById("themeSwitch");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (toggle) toggle.checked = true;
  }

  toggle?.addEventListener("change", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

});