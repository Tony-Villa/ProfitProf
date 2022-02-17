import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Goals from '../Goals/Goals';
import Home from '../Home/Home';

const AppRoutes = ({ isUser, setAuth }) => {
  return (
    <Routes>
      <Route index exact path="/" element={<Home setAuth={setAuth} isUser={isUser} />} />
      <Route path="/dashboard" element={<Dashboard setAuth={setAuth} />} />
      <Route path="/goals" element={<Goals setAuth={setAuth} />} />
    </Routes>
  );
};

export default AppRoutes;
