import { useEffect,useRef } from 'react'
import './hero.scss'

import {ReactComponent as ScrollCircle} from './ScrollCircle.svg'
import {ReactComponent as FlashLogo} from './Flash.svg'

const HeroSection = () => {
    const ref = useRef(null)

    const parallax = (e) => {
        if(ref){
            const element = document.querySelector('.sphere')
            const speed = element.getAttribute('data-speed')
            const x = (window.innerWidth - e.pageX*speed)/90
            const y = (window.innerHeight - e.pageY*speed)/90
            element.style.transform = `translateX(${x}px) translateY(${y}px)`
        }
    }
    
    useEffect(() => {
        document.addEventListener("mousemove",parallax)
        return () => document.removeEventListener("mousemove",parallax)
    }, []);

    return(
        <>
            <div className="hero-section">
                <div className="hero-img"></div>

                <div className="sphere" data-speed="10" ref={ref}>
                    <img src="https://i.ibb.co/88z8TpG/Sphere.png" alt="sphere" />
                </div>

                <div className="content">
                   <h1>Designer, Developer, Dreamer</h1>
                </div>

                <div className="scroll-down">
                    <span><FlashLogo stroke='white' width={10}/></span>
                    <span><ScrollCircle className='check' stroke='white' width={86}/></span>
                </div>

            </div>
        </>
    )
}

export default HeroSection