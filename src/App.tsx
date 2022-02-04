import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, NotFound } from './pages';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="not-found" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
