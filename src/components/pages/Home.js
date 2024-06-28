import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from './Cards.js';
import Footer from '../Footer';
import ProjectView from './ProjectView.js';


function Home () {
    return (
        <>
        <HeroSection />
        <ProjectView />
        <Cards />
        <Footer />
        </>
    );
}

export default Home;