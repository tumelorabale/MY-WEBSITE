import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom'
import Home from './pages/Home';
import Project from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Header from './components/Header';

function App() {
  
  return (
    <div>
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/portfolio-website" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/project/:id" element={<ProjectDisplay />} />
        <Route path="/experience" element={<Experience/>}/>
      </Routes>
      <Footer/>
    </Router>   
    </div>
  );
}
export default App;
