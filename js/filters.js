export function filterJobs(jobs, keyword, category) {
  return jobs.filter(job => {
    const matchKeyword =
      job.title.toLowerCase().includes(keyword.toLowerCase()) ||
      job.company_name.toLowerCase().includes(keyword.toLowerCase());

    const matchCategory =
      !category || job.category.toLowerCase().includes(category);

    return matchKeyword && matchCategory;
  });
}