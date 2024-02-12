// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Products from './pages/Products';
import Customsynthesis from './pages/Customsynthesis';
import Customanalysis from './pages/Customanalysis';
import Contactus from './pages/Contactus';

// import C from './pages/Courses/c';
// import Python from './pages/Courses/python';
// import Java from './pages/Courses/java';
// import Dsa from './pages/Courses/dsa';
// import Cpp from './pages/Courses/cpp';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Customsynthesis" element={<Customsynthesis />} />
        <Route path="/Customanalysis" element={<Customanalysis />} />
        <Route path="/Contactus" element={<Contactus />} />

        {/* <Route path="/Courses/C" element={<C />} />
        <Route path="/Courses/Java" element={<Java />} />
        <Route path="/Courses/Python" element={<Python/>} />
        <Route path="/Courses/Cpp" element={<Cpp />} />
        <Route path="/Courses/Dsa" element={<Dsa />} /> */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
