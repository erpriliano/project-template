import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import GlobalStyles from './globalStyles';
import { Landing, NotFound } from './pages';

const App: React.FC = () => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="not-found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
