import React, { useEffect } from 'react';
import '../styles/bodyhome.css';
import profileImage from '../assets/images/profile/profile-augusto.png';
import reactLogo from '../assets/images/logo/React.jpg';
import nodeLogo from '../assets/images/logo/node.png';
import expressLogo from '../assets/images/logo/express.png';
import mongoDBLogo from '../assets/images/logo/Mongo.png';
import rapiburger from '../assets/images/portfolio/Rapiburger.png';
import instagram from '../assets/images/logo/Instagram-Glyph-Color-Logo.wine.png';
import downloadIcon from '../assets/images/logo/gold-button-009.svg';
import curriculumPDF from '../assets/files/Curriculum Vitae augusto.pdf';
import ScrollReveal from 'scrollreveal';
const ProfileImage = () => {
    return <img src={profileImage} className='profile-image' alt="Profile Augusto" />;
};

const BodyHome = ({ onSectionChange }) => {
    const currentYear = new Date().getFullYear();
    const projects = [
        { id: 1, name: 'RapiBurger', image: rapiburger, website: 'https://rapiburger.netlify.app/', github: 'https://github.com/rapiburger', text: 'Ir a rapiburguer' },
        { id: 2, name: 'En proceso', image: rapiburger, website: 'https://proyecto2.com', github: 'https://github.com/proyecto2', text: 'Ir a proyecto 2' },
        { id: 3, name: 'En proceso', image: rapiburger, website: 'https://proyecto3.com', github: 'https://github.com/proyecto3', text: 'Ir a proyecto 3' },
        { id: 4, name: 'En proceso', image: rapiburger, website: 'https://proyecto4.com', github: 'https://github.com/proyecto4', text: 'Ir a proyecto 4' }
    ];
    const handleHover = (projectId) => {
        const projectText = document.getElementById(`projectText-${projectId}`);
        const linksContainer = document.createElement('div');

        const websiteLink = document.createElement('a');
        websiteLink.href = projects.find(project => project.id === projectId).website;
        websiteLink.textContent = projects.find(project => project.id === projectId).text;
        websiteLink.classList.add('project-link');
        linksContainer.appendChild(websiteLink);
        websiteLink.target = '_blank';

        linksContainer.appendChild(document.createTextNode(' | '));

        const githubLink = document.createElement('a');
        githubLink.href = projects.find(project => project.id === projectId).github;
        githubLink.textContent = 'GitHub';
        githubLink.classList.add('project-link');
        linksContainer.appendChild(githubLink);
        githubLink.target = '_blank';
        projectText.innerHTML = '';
        projectText.appendChild(linksContainer);
        projectText.classList.add('mt-2-show');
        projectText.style.transition = 'opacity 0.7s';
    };
    const handleMouseLeave = (projectId) => {
        const projectText = document.getElementById(`projectText-${projectId}`);
        projectText.style.transition = '';
        projectText.innerHTML = '';
        projectText.classList.remove('mt-2-show');
    };
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const aboutSection = document.getElementById('about');
        const portfolioSection = document.getElementById('portfolio');
        const contactSection = document.getElementById('contact');

        let currentSection = 'home';

        const aboutTop = aboutSection.offsetTop;
        const aboutBottom = aboutTop + aboutSection.offsetHeight;

        const portfolioTop = portfolioSection.offsetTop;
        const portfolioBottom = portfolioTop + portfolioSection.offsetHeight;

        const contactTop = contactSection.offsetTop;
        const contactBottom = contactTop + contactSection.offsetHeight;
        const offset = 100;
        if (scrollPosition >=  (aboutTop -60) && scrollPosition  < (aboutBottom -100)) {
            currentSection = 'about';
        } else if (scrollPosition >= (portfolioTop -100) && scrollPosition < portfolioBottom) {
            currentSection = 'portfolio';
        }


        if (scrollPosition >= contactTop - offset && scrollPosition < contactBottom) {
            currentSection = 'contact';
        }
        onSectionChange(currentSection);
    };




    useEffect(() => {
        //         ScrollReveal().reveal('.homebg', { delay: 300 });
        //         ScrollReveal().reveal('.hometext', { delay: 600 });
        ScrollReveal().reveal('.about_title', { delay: 300 });
        ScrollReveal().reveal('.about_title2', { delay: 300 });
        ScrollReveal().reveal('.description', { delay: 600 });
        ScrollReveal().reveal('.download-button', { delay: 600 });

        ScrollReveal().reveal('.about_skill_title', { delay: 600 });
        ScrollReveal().reveal('.skill_item', { delay: 600 });
        ScrollReveal().reveal('.about_skills', { delay: 600 });

        ScrollReveal().reveal('.portfolio', { delay: 600 });
        ScrollReveal().reveal('.contact-me', { delay: 300 });

    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [onSectionChange]);



    return (
        <>
            <div className='home'>
                <div className="homebg">
                    <ProfileImage />
                    <div className="hometext">
                        <h1 className="home_text2">Augusto Romera</h1>
                        <h1 className="home_text3" >Fullstack Developer</h1>
                    </div>
                </div>
            </div>
            <div id="about" className='about'>
                <div className="about_description">
                    <h2 className='about_title'>Sobre mi</h2>
                    <p className='about_title2'>
                        Desarrollador fullstack MERN.
                    </p>

                    <p className='description'>
                        Soy Augusto Romera, estudiante de Ingeniería en Sistemas con habilidades en desarrollo web. Tengo experiencia en colaboración y trabajo en equipo, y actualmente estoy buscando una oportunidad de tiempo completo en el campo del desarrollo web. Me apasiona aplicar mis conocimientos y habilidades para seguir mejorando y contribuir al éxito del equipo.
                    </p>
                    <a href={curriculumPDF} download className="download-button">
                        <img src={downloadIcon} alt="Download Icon" className="download-icon" />
                        <span className="download-text"> Descargar CV</span>
                    </a>
                </div>
                <div className="about_skills">
                    <div className="about_skill_title">
                        <h2>Skills & Technologies</h2>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            {/* React */}
                            <div className="col skill_item">
                                <img src={reactLogo} className="skill_item_logo" alt="React" />
                                <br />
                                <span>React</span>
                            </div>
                            {/* Node.js */}
                            <div className="col skill_item">
                                <img src={nodeLogo} className="skill_item_logo" alt="Node.js" />
                                <br />
                                <span>Node.js</span>
                            </div>
                            {/* Express.js */}
                            <div className="col skill_item">
                                <img src={expressLogo} className="skill_item_logo" alt="Express.js" />
                                <br />
                                <span>Express.js</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col skill_item">
                                <img src={mongoDBLogo} className="skill_item_logo" alt="MongoDB" />
                                <br />
                                <span>MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Portafolio Section */}
            <div id="portfolio" className="portfolio d-flex align-content-center justify-content-center">
                <div className="description-container  ">
                    <div className="description-port">
                        <h2>Portafolio</h2>
                        <p>
                            Proyectos en los que he participado.
                        </p>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="col-12 col-sm-6 col-md-4  p-4 d-flex align-items-center flex-column mt-2-container h-100"
                                onMouseEnter={() => handleHover(project.id, project.name)}
                                onMouseLeave={() => handleMouseLeave(project.id)}
                                style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <img src={project.image} className="image-portfolio" alt={project.name} />
                                <span id={`projectText-${project.id}`} className="mt-2"></span>
                            </div>
                        ))}

                    </div>
                </div>
            </div >
            <div id="contact" className="contact-me">
                <div className="contact-me-text ">
                    <h2>Contacto</h2>
                    <p>Contáctame si quieres que trabajemos juntos.</p>
                </div>

                <div className="container contact-me-container">
                    <div className="row justify-content-center">
                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <a href="mailto:newsromers@gmail.com" className="plain-link">
                                <i className="far fa-envelope fa-3x text-danger iconlink"></i>
                            </a>
                            <span className="textcontact">Escribir</span>
                        </div>

                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <a href="https://github.com/Augustoromera" className="plain-link" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github fa-3x text-dark iconlink"></i>
                            </a>
                            <span className="textcontact">Ver Repo</span>
                        </div>
                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <a href="https://www.instagram.com/augusto.romera/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="logo de instagram" className='contact-icon' style={{ maxWidth: '73px', height: '100%' }} />
                            </a>
                            <span className="textcontact">Seguir</span>
                        </div>
                        <div className="col-6 col-md-3 p-2 d-flex align-items-center flex-column">
                            <a href="https:/www.linkedin.com/in/augusto-romera" className="plain-link" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in fa-3x text-primary iconlink"></i>
                            </a>
                            <span className="textcontact">Contactar</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="copyright pt-5">
                <p className="text-center">
                    Copyright © {currentYear}. @augusto.romera. All Rights Reserved.
                </p>
            </div>
        </>
    );
};

export default BodyHome;
