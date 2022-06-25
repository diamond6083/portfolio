import { useEffect,useState} from "react";
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'

import sanityClient from '../../client';

import { IoIosArrowRoundForward } from "react-icons/io"

import './project-page.scss'

const transition = {duration: 1, ease: [0.6, 0.01, -0.05, 0.9]}

const ProjectSection = () => {
    const [projectDetail, setProjectDetail] = useState(null)
    const { slug } = useParams()

    useEffect(() => {
        sanityClient.fetch(
            `*[slug.current == $slug]{
                projectNo,
                title,
                project_year,
                projectDomain,
                projectRole,
                coverImage{
                    asset->{
                        _id,
                        url
                    }
                },
                variant_one{
                    asset->{
                        _id,
                        url
                    }
                },
                variant_two{
                    asset->{
                        _id,
                        url
                    }
                },
                variant_three{
                    asset->{
                        _id,
                        url
                    }
                }

            }`,{ slug }
        )
        .then((data) => setProjectDetail(data[0]))
        .catch(console.error)
    }, [slug]);
    return (
        projectDetail &&  
        <div className="project-section" >
            <motion.div animate={{height:0, 
            transition:{delay:0.1, duration:1.5,ease: [0.6, 0.01, -0.05, 0.9]}}}
            className="img-anim"></motion.div>
            <div className='cover-img'>
                    <img src={projectDetail.coverImage.asset.url} alt="cover-img" />
            </div>
            <motion.div initial={{y:"50%"}}
                animate={{
                    y:0,
                    transition: {delay:1.1, ...transition, type:'bounce'}
                }}
                className='project-content'>
                <motion.div initial={{ y:"100%", opacity:0}} 
                    animate={{y:0, opacity:1, transition:{delay:2.3, ...transition}}} 
                    className='content-heading'>
                    <h1>{projectDetail.title}</h1>
                    <p>{projectDetail.projectDomain}</p>
                </motion.div>

                <motion.div initial={{width:0}} 
                    animate={{width:"100%", transition:{delay:2.3, ...transition}}}
                className='line'></motion.div>

                <motion.div initial={{ y:"90%", opacity:0}} 
                    animate={{y:0, opacity:1, transition:{delay:2.5, ...transition}}}   
                    className='date-n-role'>
                    <p className='project-year'>{projectDetail.project_year}</p>
                    <p className='project-role'>Role - {projectDetail.projectRole}</p>
                </motion.div>

                <div className="small-variants">
                    <div className='img-wrapper'>
                        <img src={projectDetail.variant_one.asset.url} alt="variant1" />
                    </div>
                
                        <div className='img-wrapper'>
                            <img src={projectDetail.variant_two.asset.url} alt="variant2" />
                        </div>
                </div>

                <div className='big-variant'>
                    <img src={projectDetail.variant_three.asset.url} alt="variant3" />
                </div>

                <div className='line'></div>

                <div className='next-project'>
                    <IoIosArrowRoundForward color="#FFFAEA" />
                    <p>Next Project: Ethereal Dream</p>
                </div>

            </motion.div>
        </div>
       
    );
}

export default ProjectSection;