
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skill-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
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
        <div className='background'>
          <div className='cube'></div>
          <div className='cube'></div>
          <div className='cube'></div>
          <div className='cube'></div>
          <div className='cube'></div>
          <div className='cube'></div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
  
}

export default Skill

        

