import React, { useState, useCallback } from 'react';
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <Routes>
      <Route path="/:category?" element={<NewsPage/>} />
    </Routes>
  )
}

export default App;
