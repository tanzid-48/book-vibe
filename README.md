# 📚 BookVibe

**A modern, beautiful book tracking web application** built with React that helps you discover, organize, and track your personal book collection with ease.

<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-book--vibe--48.netlify.app-brightgreen?style=for-the-badge)](https://book-vibe-48.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-tanzid--48%2Fbook--vibe-black?style=for-the-badge\&logo=github\&logoColor=white)](https://github.com/tanzid-48/book-vibe)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Features

* 📖 Browse **20+ carefully selected books** across various genres
* 🔍 Detailed book information with ratings, authors, and tags
* ✅ Mark books as **Read** (persisted in localStorage)
* 💛 Add books to **Wishlist**
* 📊 Interactive **Triangle Bar Chart** to visualize your reading progress (using Recharts)
* 🔃 Sort Read & Wishlist books by **Number of Pages** or **Rating**
* 🔔 Beautiful toast notifications for every action
* 💾 Full data persistence using **localStorage** — nothing gets lost on refresh
* 🎨 Modern, clean and responsive UI with Tailwind CSS + DaisyUI

---

## 🛠️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router_v6-CA4245?style=for-the-badge\&logo=react-router\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge\&logo=daisyui\&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-00B4D8?style=for-the-badge)
![React Toastify](https://img.shields.io/badge/React_Toastify-FF6B6B?style=for-the-badge)

</div>

| Technology             | Purpose                        |
| ---------------------- | ------------------------------ |
| React 18               | Frontend Framework             |
| React Router v6        | Client-side Routing            |
| Context API            | Global State Management        |
| Recharts               | Data Visualization (Bar Chart) |
| React Toastify         | Notifications                  |
| React Tabs             | Tab Navigation                 |
| Tailwind CSS + DaisyUI | Styling & Components           |
| localStorage           | Data Persistence               |

---

## 📁 Project Structure

```bash
src/
├── assets/
├── components/
│   ├── Banner/
│   ├── BookCard/
│   ├── Books/
│   ├── CustomBarChart/
│   ├── DetailsPageCard/
│   ├── ListBook/       
│   ├── Navbar/
│   └── Footer/
├── context/
│   ├── BookContext.js
│   └── BookProvider.jsx
├── pages/
│   ├── Home/
│   ├── ListedBooks/
│   ├── DetailsPage/
│   └── ErrorPage/
├── routes/
├── utils/
│   └── LocalDB.js
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/tanzid-48/book-vibe.git

# Navigate to project directory
cd book-vibe

# Install dependencies
npm install

# Start development server
npm run dev
```

---

### Build for Production

```bash
npm run build
```

---

## 🔗 Key Pages

| Route           | Description                       |
| --------------- | --------------------------------- |
| `/`             | Home — browse all books           |
| `/listed-books` | Read list & Wishlist with sorting |
| `/book/:id`     | Book detail page                  |
| `*`             | 404 Error page                    |

---

## 👨‍💻 Author

<div align="center">

Made with ❤️ by **Tanzid Mondol**

[![GitHub](https://img.shields.io/badge/GitHub-tanzid--48-black?style=for-the-badge\&logo=github)](https://github.com/tanzid-48)

</div>

---

## 📄 License

This project is open source and available under the MIT License.
