import { useEffect,useState } from "react";

import ProjectCard from "../projectCard/projectCard";
import sanityClient from "../../client"

import { IoIosArrowRoundForward } from "react-icons/io"


import './work.scss'

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
        <div className="work">
            
            <div className="heading">
                <IoIosArrowRoundForward color="white" />
                <p>Projects in a flash</p>
            </div>
            
            <div className="projects">
                {projectData && projectData.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        url = {project.projectImage.asset.url} 
                        title = {project.title}
                        projectDomain = {project.projectDomain}
                    />
                ))}
            </div>

            {/* <div className="work-motto">
                <h1>Digital <br/>Design <br/>Adventure </h1>
            </div> */}

        </div>
    );
}

export default WorkSection;