import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

import ProjectCard from "../projectCard/projectCard";
import sanityClient from "../../client"

import { IoIosArrowRoundForward } from "react-icons/io"

import './work.scss'

const transition = {duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96]}

const WorkSection = () => {
    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "project"] | order(projectNo) {
                title,
                slug,
                projectDomain,
                projectImage{
                    asset->{
                        _id,
                        url
                    }
                }
            }`
        )
        .then((data) => setProjectData(data))
        .catch(console.error)
    }, []);
    return ( 
        <div className="work" id="work">    
            <motion.div className="work-anim" exit=
            {{height:"270vw", transition: transition}} > </motion.div> 
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
                            projectDomain = {project.projectDomain}
                        />
                    </Link>
                ))}
            </div>
            
        </div>

    );
}

export default WorkSection;