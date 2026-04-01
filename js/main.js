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
  const keyword = document.getElementById("navSearchInput").value;
  const category = document.getElementById("categoryFilter")?.value || "";

  const filtered = filterJobs(allJobs, keyword, category);

  if (filtered.length === 0) {
    showEmpty();
  } else {
    hideEmpty();
    renderJobs(filtered);
  }
};


document.getElementById("retryBtn").addEventListener("click", loadJobs);

loadJobs();