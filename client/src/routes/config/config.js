import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BrowseGenre from '../BrowseGenre/BrowseGenre';
import BrowseMovies from '../BrowseMovies/BrowseMovies';
import Analyze from '../Compare/Analyze';
import CompareSetup from '../Compare/CompareSetup';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import ShowMovie from '../ShowMovie/ShowMovie';

export default (
  <Routes>
    <Route index exact path="/" element={<Home />} />
    <Route path="/dashboard/:id" element={<Dashboard />} />
  </Routes>
);
