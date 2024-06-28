import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ProjectView from './components/pages/ProjectView';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      {/* <Route path='/' exact component={Home} /> */}
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/ProjectView' exact element={ <ProjectView />}></Route>
      </Routes> 
    </Router>
    </>
  );
}

export default App;
