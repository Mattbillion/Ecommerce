import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import Main from './component/Main/Main';
import Filter from './component/Filter';
import Navigation from './component/Navigation/Navigation';


function App() {
  
  

  return (
    <div>
      <Navigation/>
  
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books" element={<Filter />} />
      </Routes>
    </div>
  );
}

export default App;
