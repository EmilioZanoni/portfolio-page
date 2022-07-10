import React from "react"
import Navbar from "../components/Navbar"
import Projectcard from "../components/Projectcard"
import data from "../components/data.js"


// FALTA HACER UN FOOTER  
// AGREGAR UN BOTON CON FLECHA PARA ABAJO QUE LLEVE A LOS PROYECTOS
// TERMINAR LAS CARDS DE PROJECTOS 
// HACERLO RESPONSIVE
// SUBIR A SERVIDOR
// COMPROBAR QUE TODO ANDE

function Home(){
    const cards = data.map(item =>{
        return(
            <Projectcard
                id={item.id}
                img={item.img}
                desc={item.desc}
                title={item.title}
                url={item.url}
            />
        )
    })

    const year = new Date().getFullYear()


    return(
        <div className="container">
            <Navbar />
        <section id="home">
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div class="content">
                <h1 className="home-main-title">Hi, i'm Emilio!</h1>
                <h2 className="home-main-title-2">I like building websites users will love to use.</h2>
                <h3 className="home-main-title-3">Front-end web developer - React</h3>
            </div>
        </section>

        <section id="projects">
            <div>
                <h1 className="titles hover-underline-animation">Projects</h1>
                <div className="project-container">
                    {cards}
                </div>
            </div>
        </section>


        <section id="about">
            <h1 className="titles hover-underline-animation">About</h1>
            <div className="about-main-container">
                <img src="../images/my-img.JPG" alt="myself-img" className="about-img"/>
                <div className="about-text-container">
                    <h3>I'm a 21 years old self taught junior web developer from Argentina.</h3>
                    <h3>I started programming out of curiosity to express my creativity so I could build cool apps and learn about new technologies, and with effort and research I discovered that I am passionate about creating websites and learning about programming.</h3>
                    <h3>I am able to work in a team and independently, with a great dedication to solve problems that challenge me and help improve my skills.</h3>
                </div>
            </div>
        </section>

        <section id="skills">
            <h1 className="titles hover-underline-animation">Skills</h1>
            <div className="skills-container">
            <div className="skills-box">
                <h2>Key skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>NPM</li>
                    <li>Node</li>
                    <li>MongoDB</li>
                    <li>GitHub</li>
                    <li>SEO</li>
                    <li>Shopify</li>
                    <li>MySQL</li>
                    <li>Bootstrap</li>
                    <li>Git</li>
                    <li>Spanish and English lenguaje</li>
                </ul>
            </div>
            <div className="skills-box">
                <h2>Software</h2>
                <ul>
                    <li>VScode</li>
                    <li>Atom</li>
                    <li>Figma</li>
                    <li>Shopify</li>
                    <li>Hyper</li>
                </ul>
            </div>
            <div className="skills-box">
                <h2>Interests</h2>
                <p>I'm a constant learner, I like research new things and solve problems that push my own limits. I love books, videogames, gym, designing cool stuff and cars.</p>
            </div>
            <div className="skills-box">
                <h2>A little story</h2>
                <p>My name is Emilio Zanoni, I am a 21 year old self-taught web developer looking to improve and learn more about technology and web development. I started learning about programming in general in high school and found my passion when I was 19 years old.</p>
            </div>
            <div className="skills-box">
                <h2>Education</h2>
                <ul>
                    <li>Full Stack Web Developer course at Udemy</li>
                    <li>React course at Scrimba</li>
                    <li>Logic and data structures on freecodecamp.</li>
                    <li>Digital Marketing from Google Activate.</li>
                    <li>English languaje at SNAP Institute.</li>
                </ul>
            </div>
            <div className="skills-box">
                <h2>Certifications</h2>
                <ul>
                    <li>Full stack web developer</li>
                    <li>Digital Marketing</li>
                    <li>I got twice the award for the best partner of an institution, by the Rotary Club </li>
                </ul>
            </div>
            </div>
        </section>

        <section id="contact">
            <h1 className="titles hover-underline-animation">Contact</h1> 
            <div className="contact-container"> 
                <div className="contact-box">
                    <img alt="contact-icon" src="./images/outlook.png" className="contact-box-icon"/>
                    <a href="mailto:emiliozanoni@hotmail.com">emiliozanoni@hotmail.com</a>
                </div>
                <div className="contact-box">
                    <img alt="contact-icon" src="./images/whatsapp.png" className="contact-box-icon"/>
                    <a href="https://wa.me/5493400665799">+54 9 3400 665799</a>
                </div>
                <div className="contact-box">
                    <img alt="contact-icon" src="./images/linkedin.png" className="contact-box-icon"/>
                    <a href="https://www.linkedin.com/in/emilio-zanoni-51154a17b/">linkedin.emiliozanoni.com</a>
                </div>
                <div className="contact-box">
                    <img alt="contact-icon" src="./images/computer.png" className="contact-box-icon"/>
                    <a href="emiliozanoni.com">emiliozanoni.com</a>
                </div>

            </div>
        </section>

        <section id="footer">
            <div className="footer-container">
                <p>Made with love by Emilio Zanoni {year}</p>
                <p>Outlook, Whatsapp, LinkedIn and Computer icons by <a href="https://icons8.com">Icons8</a></p>
            </div>
        </section>
        
        </div>
        
    )
}

export default Home