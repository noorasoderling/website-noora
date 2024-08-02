import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import ProjectCards from './ProjectCards.js';
import CompetenceView from './CompetenceView.js';
import ProjectsPage from './ProjectsPage.js'


function Home () {
    return (
        <>
        <HeroSection />
        <CompetenceView />
        <ProjectCards />
        <ProjectsPage />
        </>
    );
}

export default Home;