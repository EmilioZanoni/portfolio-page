import React from "react"
// import { Link } from "react-router-dom";
function Navbar(){
    return(

        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <a href="#about" className="navbar-brand">
                <h3 className="hover-underline-animation">Emilio Zanoni</h3>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-right" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="#projects" className="nav-link ">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link ">About</a>    
                </li>
                <li className="nav-item">
                    <a href="#skills" className="nav-link">Skills</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link ">Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar