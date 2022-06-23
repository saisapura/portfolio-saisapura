import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../../data/portfolio.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    console.log(portfolioData);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }); 


    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container" style={{ userSelect: "none" }}>
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title" onClick={() => window.open(port.url)}> {port.title} </p>
                                    <p className="description">{port.description}</p>
                                </div> 
                                
                                <div>
                            </div>
                            </div>
                           
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page" style={{ userSelect: "none" }}>
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Some of my projects".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;