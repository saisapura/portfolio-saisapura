import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page" style={{ userSelect: "none" }}>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M','e,','', 'M','y','s','e','l','f','','&','', 'I']}
              idx={15}
            />
          </h1>
          <p datat>
          I'm a self-taught developer with an International Business background. I have a strong passion for programming and enjoys creating beautiful websites, web applications, and dynamic user experiences.
          </p>
          <p align="LEFT">
          Well-organized person, problem-solver, and fast learner. Fan of outdoor activities, photography enthusiast, and monkeys lover.
          </p>
          <p>
          I am interested in the entire front-end world and working on various ambitious projects with positive people.
          </p>
        </div>

        <div className="stage-cube-cont cube-shadow">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faVuejs} color="#04BF9D" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
