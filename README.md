# 📰 NewsPortal

A responsive and dynamic React-based news aggregator that fetches the latest news headlines using the NewsAPI. Built with Bootstrap and Infinite Scroll for a seamless reading experience.

---

## 🚀 Features

- Top headlines from categories like Business, Entertainment, Health, Science, Sports, and Technology
- Infinite scrolling for continuous news loading
- Real-time loading bar feedback
- Responsive and clean UI with Bootstrap
- Route-based navigation using React Router
- External link handling for reading full articles

---

## 🛠️ Tech Stack

- React.js
- Bootstrap 5
- React Router DOM
- React Top Loading Bar
- Infinite Scroll Component
- NewsAPI.org

---

## 🧪 Environment Setup

### Prerequisites

- Node.js and npm installed
- A [NewsAPI](https://newsapi.org) API key

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Sankalp31patil/NewsPortal.git
   cd newsportal


Install dependencies
bash

npm install


Create a .env file in the root and add:
env

REACT_APP_API_KEY=your_newsapi_key
REACT_APP_COUNTRY=in

Start the development server
bash

npm start
Open http://localhost:3000

📂 Project Structure

src/
├── components/
│   ├── Navbar.jsx
│   ├── News.jsx
│   ├── NewsItem.jsx
│   ├── Loading.jsx
│   └── Spinner.gif
├── App.jsx
├── index.js
