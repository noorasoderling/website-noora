import React, { useEffect, useState, useRef} from 'react';
import { Link } from  'react-router-dom';
import Divider from '../Divider';
import './ProjectsPage.css';
import './ProjectCards.css'

const projectList = [
  {
    id: 4,
    src: "images/tuska-img.jpeg",
    name: "Digital Marketing for a Terminal Automation & Container Handling firm",
    text: "Contributed to data-driven lead generation and content search engine optimization goals. As an SEO Specialist, I enhanced the visibility and discoverability of YouTube videos through targeted SEO strategies based on comprehensive audits. This included optimizing video titles, descriptions, and metadata to align with current trends.",
    label: "Digital Marketing",
    skills: ""
  },
  {
    id: 3,
    src: "images/travel-image.jpeg",
    name: "Data Visualizations & Material Footprint Calculator for Flow Festival Oy",
    text: "Developed an innovative Data Visualizations & Material Footprint budgeting tool to enhance sustainable event organization. Utilized AWS Cloud infrastructure and Front- End development with Next.js, React, Tailwind CSS, and Radix UI. Collaborated on site mock-ups using Figma.",
    label: "WebDev",
    skills: "NextJS, ReactJS, Typescript, Javascript, CSS"
  },
  {
    id: 5,
    src: "images/img-3.jpg",
    name: "Tietoevry.com Website Development",
    text: "Created a web page using Optimizely CMS to promote the AWS Well-Architected Framework. Improved the webpage's SEO strategy by crafting competitive meta tags and optimizing content for search engines.",
    label: "WebDev",
    skills: "Optimizely CMS, GTM, GA4"
  },
  {
    id: 2,
    src: "images/img-3.jpg",
    name: "Marketing Automation &  Digital Marketing Optimization for a Major Media House in Finland",
    text: "Implementation of a comprehensive marketing automation solution for various business units. Responsibilities: mapping and recreating customer use cases, deploying optimized automation journeys, and creating custom email templates, landing pages, and web forms using CSS, HTML, and JavaScript. Also developed integrations with systems such as MS Dynamics and WordPress using API calls and SQL.",
    label: "Digital Marketing",
    skills: "Digital Engagement, Digital Marketing and SQL, Digital Experience, CSS, HTML, Javascript, JSON, Customer Journey Mapping"
  },
  {
    id: 1,
    src: "images/img-3.jpg",
    name: "Research on Customer Journey Mapping for ABB Oyj",
    text: "Research on Customer Journey Mapping (including buyer personas) and its impact to superior Customer Experience. The research initiated development projects aimed at enhacing both front-end and back end processes of the customer journey. By addressing pain points, it improved the ease of doing business and added value for end customers.",
    label: "Digital Marketing",
    skills: "Customer Journey Mapping"
  },
  {
    id: 6,
    src: "images/img-3.jpg",
    name: "Tuska Festival Mobile Application Development",
    text: "Enhanced the festival experience through a comprehensive mobile application developed in React Native. The app offers essential features such as schedules, news updates, artist information, stage details, and sustainability initiatives. As a Mobile App Developer, I focused on resolving bugs, implementing enhancements, and improving the app's overall functionality and user experience.",
    label: "MobileDev",
    skills: "React Native, Node"
  },
  {
    id: 0,
    src: "images/img-3.jpg",
    name: "Global Customer Service for B2B clients in ABB Drives Service FI",
    text: "Managing internal and external orders from inquiry/awareness lever until post delivery. Daily problem solving work related to international trade, general customer experience and IT/platform issues.",
    label: "Digital Marketing",
    skills: "Intercultural Skills, Qualitative Research, Project Management."
  },
  {
    id: 6,
    src: "images/img-3.jpg",
    name: "Toggle Test",
    text: "Showing very short text",
    label: "Test",
    skills: "Test"
  },
];

function ProjectsPage() {

    const [isOpen, setIsOpen] = useState(false);

    //handles onClick event sot that the action affects cards individually
    const toggleExpand = (id) => {
        setIsOpen(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

     // eslint-disable-next-line 
    const [showReadMore, setShowReadMore] = useState(false);
    
    // checks how many lines the paragraphs contain so that in mount ikt can hide the links if necessary
    useEffect (() => {
        if (ref.current) {
            setShowReadMore(ref.current.scrollHeight !== ref.current.clientHeight)
        }
    }, [])

    const ref = useRef(null);


    const paragraphStyle = {
        WebkitLineClamp: 3, 
        WebkitBoxOrient: 'vertical', 
        overflow: 'hidden', 
        display: '-webkit-box',
    };

  return (
    <div className='projects'>
        <Divider color={'var(--dark)'}/>
        <h2>Check out my Projects</h2>
        <div className='project_container'>
        <div className='projects-wrapper'>
        <ul className='project-items'>
            {projectList.map((project) => (
                <li className="project-item">
                <Link className="project-items-card" to="/">
                <figure className="cards__item__pic-wrap" data-category={project.label}>
                <img src={project.src} alt="Noora travleing in the mountains" className='cards__item__img'></img>
                </figure>
                <div className='project-item-text'>
                    <h5>{project.name}</h5>
                </div>
                <div className='project-item-text'>
                    <p style={isOpen[project.id] ? null : paragraphStyle} ref={ref}>{project.text}</p>
                </div>
                <div className='project-item-toggle'>
                <Link onClick={() => toggleExpand(project.id)}>
                        {isOpen[project.id] ? 'Show Less' : 'Show More'}
                    </Link>
                </div>
                <div className='project-item-tags'> 
                    <p>Skill stack: <br/> {project.skills}</p>
                </div>
                </Link>
                </li>
            ))}
        </ul>
        </div>
        </div>
    </div> 
  );
}

export default ProjectsPage
