import { motion } from 'framer-motion'

import './projectCard.scss'

const transition = {duration: 1, ease: [0.6, 0.01, -0.05, 0.9]}

const variants = {
    initial: {y:"50%", opacity: 0}, 
    animate: {y:0, opacity:1, transition:{delay:0.2, ...transition}}
}

const ProjectCard = ({title,url,projectDomain,index}) => {
    return (
        <>
            <div className="card">
                <div  className="image-wrapper">
                    <img src={url} alt="Project thumbnail" />
                </div>
                <motion.span variants={variants} initial="initial" animate="animate" 
                    className='title'>{title}</motion.span>
                <motion.span variants={variants} initial="initial" animate="animate" 
                    className='domain'>{projectDomain}</motion.span>
            </div>
        </>
        
    );
}

export default ProjectCard;