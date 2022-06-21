import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
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
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint voluptas quidem recusandae assumenda ipsam, numquam cupiditate repudiandae pariatur odio cumque.
          </p>
          <p align="LEFT">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse, enim quo reiciendis asperiores repellendus soluta delectus ullam. Fuga, eveniet!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde quo fuga facilis, dolorum pariatur ut nemo quam aspernatur enim, itaque esse mollitia ducimus dolor odit ea totam! Minus, cupiditate.
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
