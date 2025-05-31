import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import CreateProfile from './pages/CreateProfile.jsx';
import PlayerExperience from './pages/PlyaerExperience.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/player-experience" element={<PlayerExperience />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
