import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import './projectCard.scss'

const transition = {duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96]}

const ProjectCard = ({title,url,projectRole}) => {
    const {ref, inView} = useInView({threshold:0.3})
    const animation = useAnimation()

    useEffect(() => {
        if(inView){
           animation.start({
            height: 0, transition:{...transition, ease:"easeInOut"}})
        }
        
    },[inView])
    
    return (
        <>
        
            <div className="card"  >
                <motion.div animate={animation} className='block' ref={ref}></motion.div>
                <div  className="image-wrapper">
                    <img src={url} alt="Project thumbnail" />
                </div>
                <span className='title'>{title}</span>
                <span className='role'>{projectRole}</span>
            </div>
        </>
        
    );
}

export default ProjectCard;