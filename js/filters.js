export function filterJobs(jobs, keyword, category, sortOption = "newest") {

  let result = jobs
    .filter(job => {
      const key = keyword.toLowerCase();

      return (
        job.title.toLowerCase().includes(key) ||
        job.company_name.toLowerCase().includes(key)
      );
    })
    .filter(job => {
      if (!category) return true;
      return job.category.toLowerCase().includes(category.toLowerCase());
    });

  if (sortOption === "newest") {
    result = result.sort(
      (a, b) => new Date(b.publication_date) - new Date(a.publication_date)
    );
  } 
  else if (sortOption === "oldest") {
    result = result.sort(
      (a, b) => new Date(a.publication_date) - new Date(b.publication_date)
    );
  }

  return result;
}