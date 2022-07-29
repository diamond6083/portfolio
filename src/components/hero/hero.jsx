import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import {ReactComponent as ScrollCircle} from './ScrollCircle.svg'

import './hero.scss'

const variants = {
    initial: { y:'10vw', skewY:20, opacity:0},
    animate: { y:0, skewY:0, opacity:1, delay:2.8}
}


const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

const HeroSection = ({heroUrl}) => {
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
                <motion.div className="hero-anim" animate=
                    {{height:0, skewY:0, transition: {...transition,duration:1.5}}} > 
                </motion.div> 
                <motion.div initial={{scale:2.5}}  
                animate={{scale:1,transition:{...transition,delay:0.2}}} 
                className="hero-img"
                style={{backgroundImage:`url(${heroUrl})`}}
                ></motion.div>

                <div className="sphere" ref={ref}>
                    <img src="https://i.ibb.co/88z8TpG/Sphere.png" alt="sphere" />
                </div>

                <div className="content">
                    <motion.h1 variants={variants} initial="initial" animate="animate" 
                    transition={transition}>Designer, Developer, Dreamer</motion.h1>
                </div>    

                <motion.div initial={{y:'30vh'}} 
                animate={{y:0,transition:{...transition,duration:1.6,delay:1}}}>
                    <ScrollCircle className='circle' stroke='white' width={86}/>
                </motion.div>
                

            </div>
        </>
    )
}

export default HeroSection