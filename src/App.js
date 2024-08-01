import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Home from './components/pages/Home'; 
import CompetenceView from './components/pages/CompetenceView';
import ProjectsPage from './components/pages/ProjectsPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      {/* <Route path='/' exact component={Home} /> */}
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/CompetenceView' exact element={ <CompetenceView />}></Route>
        <Route path='/ProjectsPage' exact element={ <ProjectsPage />}></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
