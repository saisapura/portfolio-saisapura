
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
      <div className="container skill-page" style={{ userSelect: "none" }}>
        <div className="text-zone">
          <h1 >
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', '', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />
          </h1>
          
          <p>
          My journey as a front-end developer <span>started in 2021 </span>when I accidentally typed &lt;h1&gt;Hello world&lt;/h1&gt; on a free coding website. A simple HTML tag has brought me great excitement. I afterward decided to learn <span>Javascript</span> and put my effort into it. 
          </p>
          <p align="LEFT">
          After months, I'd like to style my website to make it look good. Therefore, I took <span>HTML & CSS</span> course. During that time, I also played around with <span>Bootstrap</span> and CSS processor like <span>SASS </span>and <span>SCSS</span>.
          </p>
          <p>
          Based on my knowledge, I successfully created responsive and modern-looking websites and real-world applications using HTML & CSS, and Javascript. I currently learn <span>React.js</span> and consistently level up my existing skills.
          </p>
          
         </div>
        <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 500 500">
        <path class="monkey" fill="#181818"  fill-opacity="0.4" d="M331 439.6H167.5L111 329.4v-50.2L61 227V112h56l133-51.6L380.5 112H439v115l-52.6 55.8v46.6L331 439.6zM179.3 425H319v-38H179.4v38zm-53.5-99l39 75.8V278L138 225.7V168l58.3-57.6 53 26.4 52.5-26.4L361 168v57.8L333.8 278v123.3l38-75.4V124L250 76.2l-124.2 48V326zm53.5 46.3H319v-90.7L249 258l-69.5 23.5v90.8zm69.5-129.8l74 24.8 23.6-45v-48l-47.3-46-49.5 25-50-25L153 174v48.4l23 45 73-24.7zm137.6-115.8v134.7l38-40.3v-94h-38zM75.6 221l35.5 37V126.7H76V221zm142.8 111.8l-25.8-26.6L203 296l26 26.5-10.6 10.3zm62.7 0l-10.4-10.2 25-26.6 10.7 10-25 26.7zm-50-101.5h-66v-67.6h66v67.6zm-51.4-14.7h37v-38.2h-37v38.2zM333.8 231h-66.4v-67.5h66.4V231zM282 216.5h37v-38.2h-37v38.2z"/>
       </svg>

      </div>
      <Loader type="pacman" />
    </>
  )
  
}

export default Skill

        

