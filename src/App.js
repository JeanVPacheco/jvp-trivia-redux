import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameSettings from './game/GameSettings';
import { Questions } from './game/Questions';
import LoginPage from './pages/LoginPage';
import RankingPage from './pages/RankingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/game" element={<Questions />} />
        <Route exact path="/settings" element={<GameSettings />} />
        <Route exact path="/ranking" element={<RankingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
