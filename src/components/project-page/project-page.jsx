import { useEffect,useState, useLayoutEffect, useRef} from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import {gsap,Power3} from 'gsap/dist/gsap';

import sanityClient from '../../client';

import { IoIosArrowRoundForward } from "react-icons/io"
import Loader from "../loader/loader";

import './project-page.scss'
import PreLoader from "../preloader/preloader";

const transition = {duration: 1, ease: [0.6, 0.01, -0.05, 0.9]}

const ProjectSection = () => {
    var navigate = useNavigate()
    const [anim, setAnim] = useState(true)
    const [anim2, setAnim2] = useState(true)
    const [ref, inView] = useInView({threshold:0.2})
    const [ref2, inView2] = useInView({threshold:0.2})
    const [back, setBack] = useState(true)
    const [projectDetail, setProjectDetail] = useState(null)
    const { slug } = useParams()
    const [nextProject, setNextProject] = useState(null)

    var proNo = 1
    
    const next = () => {
        if(projectDetail.projectNo === 12)
            proNo = 1
        else proNo = projectDetail.projectNo + 1
        sanityClient.fetch(
            `*[_type == "project" && projectNo == $proNo]{
                title,
                slug
            }`,{proNo}
        ).then((data) => setNextProject(data[0]))
        .catch(console.error)
    }

    const hideBack = (e) => {
        if(e.wheelDeltaY < 0)
            setBack(false)
        else
            setBack(true)
    }

    const handleClick = () => navigate('/')

    useLayoutEffect(() => { 
        let tl = gsap.timeline({defaults:{ease: Power3.easeInOut}})
        if(inView && anim){
        tl.fromTo('.img-wrapper',{autoAlpha:0,y:100},
                        {autoAlpha:1,y:0,stagger:{each:0.5} ,duration:1})
        setAnim(false)
        }
    },[inView,anim])

    useLayoutEffect(() => { 
        let tl = gsap.timeline({defaults:{ease: Power3.easeInOut}})
        if(inView2 && anim2){
        tl.fromTo('.big-variant',{autoAlpha:0,y:200},
                        {autoAlpha:1,y:0,duration:1})
        setAnim2(false)
        }
    },[inView2,anim2])

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

    // Fetching Next project details
    useEffect(() => {
        if(projectDetail){
            next()
        }
    }, [projectDetail]);

    // Hiding back button on scroll  
    useEffect(() => {
        window.addEventListener("wheel", hideBack)
        return () => window.removeEventListener("wheel", hideBack)
    }, []);


    return (
        projectDetail && nextProject ? ( 

        <div className="project-section" >

            <motion.div className="work-anim" exit=
                {{height:"100vh", transition: {delay:0.3,...transition}}} > 
            </motion.div> 
            <motion.div className="work-anim2" exit=
                {{height:"100vh", transition: transition}} > 
            </motion.div> 

            <motion.div initial={{x:"-100%",opacity:0}}
                animate={{
                    x:0,opacity:1,
                    transition: {delay:2, ...transition, duration:1.5, ease:'easeInOut'}
                }} className = {back ? 'back' : 'back hidden'}  onClick = {handleClick}>
                <p className="back-text">Back</p>
            </motion.div>

            <motion.div animate={{height:0, 
            transition:{delay:0.1, duration:1.4,ease: [0.6, 0.01, -0.05, 0.9]}}}
            className="img-anim"></motion.div>
            <div className='cover-img'>
                    <img src={projectDetail.coverImage.asset.url} alt="cover-img" />
            </div>
            
            <motion.div initial={{y:"50%",opacity:0}}
                animate={{
                    y:0,opacity:1,
                    transition: {delay:1.1, ...transition,ease:'easeInOut',type:'spring'}
                }}
                className='project-content'>
                <motion.div initial={{ y:"100%", opacity:0}} 
                    animate={{y:0, opacity:1, 
                    transition:{delay:2.3, ...transition}}} 
                    className='content-heading'>
                    <h1>{projectDetail.title}</h1>
                    <p>{projectDetail.projectDomain}</p>
                </motion.div>

                <motion.div initial={{width:0}} 
                    animate={{width:"100%", transition:{delay:2.3, ...transition}}}
                className='line'></motion.div>

                <motion.div initial={{ y:"90%", opacity:0}} 
                    animate={{y:0, opacity:1, 
                    transition:{delay:2.5, ...transition}}}   
                    className='date-n-role'>
                    <p className='project-year'>{projectDetail.project_year}</p>
                    <p className='project-role'>Role - {projectDetail.projectRole}</p>
                </motion.div>

                <div className="small-variants" ref={ref}>
                    <div className='img-wrapper'>
                        <img src={projectDetail.variant_one.asset.url} alt="variant1" />
                    </div>
                
                    <div className='img-wrapper'>
                        <img src={projectDetail.variant_two.asset.url} alt="variant2" />
                    </div>
                </div>

                <div className='big-variant' ref={ref2}>
                    <img src={projectDetail.variant_three.asset.url} alt="variant3" />
                </div>

                <div className='line'></div>

                <div className='next-project'>
                    <IoIosArrowRoundForward color="#FFFAEA" />
                    <Link to={"/"+nextProject.slug.current}>
                        <p>Next Project: {nextProject.title}</p>
                    </Link>
                </div>

            </motion.div>
        </div>
        ) : <Loader/>
       
    );
}

export default ProjectSection;