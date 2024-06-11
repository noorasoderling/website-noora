import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Tuska from './components/pages/Tuska';
import FlowFestival from './components/pages/FlowFestival';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      {/* <Route path='/' exact component={Home} /> */}
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/Tuska' exact element={ <Tuska />}></Route>
        <Route path='/FlowFestival' exact element={ <FlowFestival />}></Route>
      </Routes> 
    </Router>
    </>
  );
}

export default App;
