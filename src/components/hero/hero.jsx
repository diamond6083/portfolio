import { useEffect} from 'react'
import { useInView } from 'react-intersection-observer'

import {ReactComponent as ScrollCircle} from './ScrollCircle.svg'
import {ReactComponent as FlashLogo} from './Flash.svg'

import './hero.scss'

const HeroSection = () => {
    const {ref, inView} = useInView()

    const parallax = (e) => {
        if(ref){
            const element = document.querySelector('.sphere')
            const speed = 10
            const x = (window.innerWidth - e.pageX*speed)/90
            const y = (window.innerHeight - e.pageY*speed)/90
            element.style.transform = `translateX(${x}px) translateY(${y}px)`
        }
    }
    
    useEffect(() => {
        if(inView){
        document.addEventListener("mousemove",parallax)
        return () => document.removeEventListener("mousemove",parallax)
        }
    }, [inView]);

    return(
        <>
            <div className="hero-section" id='hero'>
                <div className="hero-img"></div>

                <div className="sphere" ref={ref}>
                    <img src="https://i.ibb.co/88z8TpG/Sphere.png" alt="sphere" />
                </div>

                <div className="content">
                   <h1>Designer, Developer, Dreamer</h1>
                </div>

                <div className="scroll-down">
                        <ScrollCircle className='circle' stroke='white' width={86}/>
                        <span className="flash"><FlashLogo stroke='white' width={10}/></span>
                </div>

            </div>
        </>
    )
}

export default HeroSection