// ✅ Core React imports
import React, { useState } from 'react';

// ✅ Custom components
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

// ✅ React Router imports for client-side routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  // Number of news articles per page
  const pagesize = 6;

  // 🔐 Read API key and country code from .env file
  const apiKey = process.env.REACT_APP_API_KEY;
  const country = process.env.REACT_APP_COUNTRY;

  console.log(apiKey); // For debugging only — remove this in production

  // 🟨 State for the loading bar progress (0 to 100)
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div>

        {/* 🔴 Top loading bar that shows during API calls */}
        <LoadingBar
          color='#f11946'
          progress={progress}
        />

        {/* 🧭 Navigation bar */}
        <Navbar />

        {/* 📰 Routes for different news categories */}
        <Routes>

          {/* 🏠 General News */}
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pagesize}
                country={country}
                category="general"
                spanColor="warning"
                titleColor="yellow"
              />
            }
          />

          {/* 💼 Business */}
          <Route
            path="business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pagesize}
                country={country}
                category="business"
                spanColor="secondary"
                titleColor="gray"
              />
            }
          />

          {/* 🎬 Entertainment */}
          <Route
            path="entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pagesize}
                country={country}
                category="entertainment"
                spanColor="info"
                titleColor="cyan"
              />
            }
          />

          {/* 🏥 Health */}
          <Route
            path="health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pagesize}
                country={country}
                category="health"
                spanColor="danger"
                titleColor="red"
              />
            }
          />

          {/* 🔬 Science */}
          <Route
            path="science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pagesize}
                country={country}
                category="science"
                spanColor="primary"
                titleColor="blue"
              />
            }
          />

          {/* 🏅 Sports */}
          <Route
            path="sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pagesize}
                country={country}
                category="sports"
                spanColor="success"
                titleColor="green"
              />
            }
          />

          {/* 💻 Technology */}
          <Route
            path="technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pagesize}
                country={country}
                category="technology"
                spanColor="dark"
                titleColor="gray-900"
              />
            }
          />

        </Routes>
      </div>
    </Router>
  );
}
