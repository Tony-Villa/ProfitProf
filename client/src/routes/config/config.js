import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';

export default (
  <Routes>
    <Route index exact path="/" element={<Home />} />
    <Route path="/dashboard/:id" element={<Dashboard />} />
  </Routes>
);
