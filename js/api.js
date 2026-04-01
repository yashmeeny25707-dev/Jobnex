const BASE_URL = "https://remotive.com/api/remote-jobs";

export async function fetchJobs() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await response.json();
  return data.jobs;
}