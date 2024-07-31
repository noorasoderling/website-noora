import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import ProjectCards from './ProjectCards.js';
import Footer from '../Footer';
import CompetenceView from './CompetenceView.js';


function Home () {
    return (
        <>
        <HeroSection />
        <CompetenceView />
        <ProjectCards />
        <Footer />
        </>
    );
}

export default Home;