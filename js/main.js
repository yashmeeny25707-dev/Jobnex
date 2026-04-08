import { fetchJobs } from "./api.js";
import {
  renderJobs,
  showLoading,
  hideLoading,
  showError,
  hideError,
  showEmpty,
  hideEmpty
} from "./ui.js";

import { filterJobs } from "./filters.js";

let allJobs = [];

//Loading Jobs from API
async function loadJobs() {
  showLoading();
  hideError();
  hideEmpty();

  try {
    const jobs = await fetchJobs();

    console.log("API DATA:", jobs);

    allJobs = jobs;

    if (!allJobs || allJobs.length === 0) {
      showEmpty();
    } else {
      renderJobs(allJobs);
    }

  } catch (err) {
    console.error("ERROR:", err);
    showError("Failed to load jobs");
  } finally {
    hideLoading();
  }
}

//Search & filter Jobs
window.searchJobs = function () {
  const keyword =
    document.getElementById("searchInput")?.value ||
    document.getElementById("navSearchInput")?.value ||
    "";

  const category = document.getElementById("categoryFilter")?.value || "";
  const sortOption = document.getElementById("sortOption")?.value || "newest";

  const filtered = filterJobs(allJobs, keyword, category, sortOption);

  hideEmpty();

  if (filtered.length === 0) {
    document.getElementById("jobsGrid").innerHTML = "";
    showEmpty();
  } else {
    renderJobs(filtered);
  }
};

//SEARCH ON ENTRY KEY PRESS
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("retryBtn")?.addEventListener("click", loadJobs);
  document.getElementById("navSearchInput")?.addEventListener("input", searchJobs);
  document.getElementById("searchBtn")?.addEventListener("click", searchJobs);
  document.getElementById("categoryFilter")?.addEventListener("change", searchJobs);
  document.getElementById("searchInput")?.addEventListener("input", searchJobs);

  document.querySelectorAll(".qf-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.cat;

      const dropdown = document.getElementById("categoryFilter");
      if (dropdown) dropdown.value = category;

      // STYLE OF ACTIVE PILL
      document.querySelectorAll(".qf-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      searchJobs();
    });
  });

  loadJobs();

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
