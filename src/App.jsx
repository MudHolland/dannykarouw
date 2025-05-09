
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ShowcasesPage from '@/pages/ShowcasesPage';
import AboutPage from '@/pages/AboutPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="showcases" element={<ShowcasesPage />} />
          <Route path="about" element={<AboutPage />} />
          {/* You can add a 404 page here later */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
