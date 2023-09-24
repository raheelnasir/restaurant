// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage'; // Make sure to use the correct path
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import AboutPage from './Pages/About/AboutPage';
import ContactPage from './Pages/Contact/ContactPage';
import OpeningHour from './Pages/OpeningHours/OpeningHour';
import Menu from './Pages/Menu/Menu';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path='/contact' element={<ContactPage />} />
          <Route exact path='/opening' element={<OpeningHour />} />
          <Route exact path='menu' element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
