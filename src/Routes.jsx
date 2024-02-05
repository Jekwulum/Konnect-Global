import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/home/Home';
import Error404 from './pages/Error404';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />.

        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;