import React from "react"

function Projectcard(props){
    return(
        <div className="card-container">
            <img className="card-image" src={props.img} alt="project-img"/>
            <div className="card-text">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-description">{props.desc}</p>
            </div>
            <a  href={props.url}>
                <button className="card-btn">Live demo!</button>
            </a>
        </div>
    )
}

export default Projectcard