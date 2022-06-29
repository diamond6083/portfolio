import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import {ReactComponent as ScrollCircle} from './ScrollCircle.svg'
import {ReactComponent as FlashLogo} from './Flash.svg'

import './hero.scss'

const variants = {
    initial: { y:'10vw', skewY:20, opacity:0},
    animate: { y:0, skewY:0, opacity:1}
}
const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

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
                    <motion.h1 variants={variants} initial="initial" animate="animate" 
                    transition={transition}>Designer, Developer, Dreamer</motion.h1>
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