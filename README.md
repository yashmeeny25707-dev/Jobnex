# Jobnex — Job Discovery Platform

A responsive web application that helps users discover, search, filter, and save remote job opportunities in real-time using public job APIs.

---

## Purpose

Jobnex allows users to explore remote job opportunities across various industries in one place. Users can search jobs by title or company, filter by job type or category, sort listings based on relevance, and save their favorite jobs for later.

This project demonstrates practical JavaScript skills including API integration, Array Higher-Order Functions, and dynamic UI rendering.

---

## API Used

**Remotive API**  
Base URL: https://remotive.com/api/remote-jobs  
Docs: https://remotive.com/api-documentation  

### Endpoints Used
- GET /api/remote-jobs — Fetch all remote jobs  
- Query parameters for searching/filtering (if needed)

---

## Planned Features

### 1. Job Tabs
- View all jobs in a clean card layout  
- (Optional) Categories like Software, Marketing, Design  

### 2. Search
- Search jobs by title or company name  
- Implemented using Array `filter()`  

### 3. Filter
- Filter jobs by:
  - Job Type (Full-time, Part-time, Contract)  
  - Category (e.g., Dev, Marketing)  
- Implemented using Array `filter()`  

### 4. Sort
- Sort jobs by:
  - Latest (date)  
  - Company name (A-Z)  
- Implemented using Array `sort()`  

### 5. Favorites
- Add/remove jobs from favorites  
- Stored using `localStorage`  
- Implemented using Array `map()` & `filter()`  

### 6. Job Cards
Each job card will display:
- Job Title  
- Company Name  
- Job Type  
- Location  
- Apply Button (redirect to job link)  

---

## Bonus Features

- Debouncing — Optimized search input  
- Local Storage — Save favorites  
- Dark / Light Mode — Theme toggle  
- Pagination — Handle large job lists  

---

## Technologies

- HTML5 — Structure  
- CSS3 — Styling & responsive design  
- JavaScript (ES6+) — Fetch API, DOM, HOFs  
- Remotive API — Job data  
- Pure Vanilla JavaScript  

---

## How to Run

1. Clone the repository:
   git clone https://github.com/yashmeeny25707-dev/jobnex.git

2. Open the project folder

3. Open index.html in your browser

No additional setup required.

---

## Project Structure

Jobnex/
├── index.html
├── post-job.html
├── css/
│   ├── style.css
│   └── post-job.css
├── js/
│   ├── api.js
│   ├── filters.js
│   ├── main.js
│   ├── post-job.js
│   └── ui.js
├── README.md

---

## Future Scope

- User authentication (login/signup)  
- Job alerts & notifications  
- Resume upload & tracking  

---

## Author

**Yashmeen**  
https://github.com/yashmeeny25707-dev
