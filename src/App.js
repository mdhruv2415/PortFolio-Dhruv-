import './App.css';
import React from 'react';
import Landingpage from './components/Landingpage';
import About from './components/About';
import Projects from './components/Projects';
// import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';


function App() {

  

  return (
    <div className="App relative overflow-x-hidden">
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Landingpage />}></Route>
        <Route path ='/about' element={<About />}></Route>
        <Route path ='/project' element={<Projects />}></Route>
        <Route path ='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
