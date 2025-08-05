import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ExamPage from './pages/ExamPage';
import AIPlannerPage from './pages/AIPlannerPage';
import NewsPage from './pages/NewsPage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exams" element={<ExamPage searchTerm={searchTerm} />} />
        <Route path="/planner" element={<AIPlannerPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;