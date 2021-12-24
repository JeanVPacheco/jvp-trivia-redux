import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Questions } from './game/Questions';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/game" element={<Questions />} />
      </Routes>
    </Router>
  );
}

export default App;
