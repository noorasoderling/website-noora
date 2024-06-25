import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ProjectView from './components/pages/ProjectView';
import Resume from './components/pages/Resume';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      {/* <Route path='/' exact component={Home} /> */}
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/ProjectView' exact element={ <ProjectView />}></Route>
        <Route path='/Resume' exact element={ <Resume />}></Route>
      </Routes> 
    </Router>
    </>
  );
}

export default App;
