import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import ProjectView from './ProjectView.js';
import Resume from './Resume.js';


function Home () {
    return (
        <>
        <HeroSection />
        <ProjectView />
        <Resume />
        <Cards />
        <Footer />
        </>
    );
}

export default Home;