# StudentMS

A simple **Student Management System** front-end I built while learning **HTML, CSS, JavaScript, and Bootstrap**. It simulates a university portal with a student dashboard, an admin panel, and course pages — all running in the browser with `localStorage` acting as the database.

## Pages

- **`index.html`** — Student dashboard: profile card (name, registration no, CGPA, credit hours), enrolled course cards, and a navbar with dropdowns
- **`admin.html`** — Admin panel: a students table with full **CRUD** (create, update, delete) using SweetAlert2 popups, including duplicate registration-number checks
- **`courses.html`** — Course details page: receives the course name and teacher via URL query parameters, with Grade / Attendance / Announcements / Queries buttons

## How It Works

- Data (students, registration numbers, courses, teachers) is stored in **localStorage** — no backend, refresh-safe within the same browser
- Clicking a course card on the dashboard passes the course info through the URL to `courses.html`
- SweetAlert2 handles all create/update/delete dialogs instead of plain `prompt()` boxes

## Tech Used

- HTML5, CSS3, JavaScript
- [Bootstrap 5](https://getbootstrap.com/) + [jQuery 3.7](https://jquery.com/)
- [SweetAlert2](https://sweetalert2.github.io/) for dialogs
- [Font Awesome](https://fontawesome.com/) for icons

## Getting Started

Open `index.html` in a browser and navigate to **Admin** from the navbar to try the CRUD panel.

> **Note:** the pages load Bootstrap from a sibling `node_modules` folder (`../node_modules/bootstrap/...`), so run `npm install bootstrap` in the **parent** `HTML` folder first — or swap those `<link>`/`<script>` tags for the Bootstrap CDN if you're opening this folder on its own.

## Project Structure

```
StudentMS/
├── index.html          # Student dashboard
├── style.css
├── script.js           # Course card click → redirect with query params
├── admin.html          # Admin panel (CRUD table)
├── admin-style.css
├── admin-script.js     # CRUD logic + localStorage
├── courses.html        # Course details
├── course-style.css
├── course-script.js    # Reads course info from URL params
└── utils/              # Images
```

## Notes

This is a learning project — data doesn't persist across browsers or machines (localStorage only), some content is placeholder, and there are commented-out experiments in the scripts from working things out.
