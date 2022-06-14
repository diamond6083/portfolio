import ProjectCard from "../projectCard/projectCard";

import { IoIosArrowRoundForward } from "react-icons/io"

import './work.scss'

const WorkSection = () => {
    return ( 
        <div className="work">
            <div className="heading">
                <IoIosArrowRoundForward color="white" />
                <p>Projects in a flash</p>
            </div>
            <div className="projects">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
            
        </div>
    );
}

export default WorkSection;