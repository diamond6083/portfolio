import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

import ProjectCard from "../projectCard/projectCard";

import { IoIosArrowRoundForward } from "react-icons/io"

import './work.scss'

const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

const WorkSection = ({projectData}) => {

    return ( 
        <div className="work" id="work">    
            <motion.div className="work-anim" exit=
            {{height:"100vh", transition: {delay:0.3,...transition}}} > </motion.div> 
            <motion.div className="work-anim2" exit=
            {{height:"100vh", transition: transition}} > </motion.div> 
            <div className="heading">
                <IoIosArrowRoundForward color="white" />
                <p>Projects in a flash</p>
            </div>
            
            <div  
                className="projects">
                {projectData && projectData.map((project, index) => (
                    <Link to={"/"+project.slug.current} key={project.slug.current}>
                        <ProjectCard 
                            key={index} 
                            url = {project.projectImage.asset.url} 
                            title = {project.title}
                            projectRole = {project.projectRole}
                        />
                    </Link>
                ))}
            </div>
            
        </div>

    );
}

export default WorkSection;