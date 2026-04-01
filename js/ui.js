export function showLoading() {
  document.getElementById("loadingState").classList.remove("hidden");
  document.getElementById("jobsGrid").innerHTML = "";
}

export function hideLoading() {
  document.getElementById("loadingState").classList.add("hidden");
}

export function showError(msg) {
  document.getElementById("errorState").classList.remove("hidden");
  document.getElementById("errorMessage").textContent = msg;
}

export function hideError() {
  document.getElementById("errorState").classList.add("hidden");
}

export function showEmpty() {
  document.getElementById("emptyState").classList.remove("hidden");
}

export function hideEmpty() {
  document.getElementById("emptyState").classList.add("hidden");
}


// Get Company logo Using Clearit API
function getCompanyLogo(company) {
  const name = company.toLowerCase().replace(/\s+/g, "");
  return `https://logo.clearbit.com/${name}.com`;
}


//Render Jobs
export function renderJobs(jobs) {
  const grid = document.getElementById("jobsGrid");
  const count = document.getElementById("jobCount");

  grid.innerHTML = "";
  count.textContent = `${jobs.length} jobs`;

  jobs.forEach(job => {

    const logoUrl = job.company_logo || getCompanyLogo(job.company_name);

    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <div class="card-header">

        <img src="${logoUrl}" class="company-logo"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />

        <div class="logo-placeholder" style="display:none;">
          ${job.company_name.charAt(0)}
        </div>

        <div class="card-title-group">
          <div class="job-title">${job.title}</div>
          <div class="company-name">${job.company_name}</div>
        </div>

      </div>

      <div class="card-meta">
        <span class="tag tag-type">${job.job_type}</span>
        <span class="tag tag-location">${job.candidate_required_location}</span>
        <span class="tag tag-category">${job.category}</span>
      </div>

      <div class="card-footer">
        <span class="posted-date">${job.publication_date.slice(0, 10)}</span>
        <a href="${job.url}" target="_blank" class="apply-btn">Apply</a>
      </div>
    `;

    grid.appendChild(card);
  });
}