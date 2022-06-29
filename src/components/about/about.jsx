import { useLayoutEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {gsap,Power3} from 'gsap/dist/gsap';

import TextCard from '../text-card/text-card';

import './about.scss'

const AboutSection = ({workData}) => {
    const [anim, setAnim] = useState(true)
    const [ref, inView] = useInView({threshold:0.6})

    useLayoutEffect(() => {
        let tl = gsap.timeline({defaults:{ease: Power3.easeOut}})
        if(inView && anim){
            tl.fromTo('.about-heading',{autoAlpha:0,y:100},
                        {autoAlpha:1,y:0,stagger:{each:0.4} ,duration:1})
            .fromTo('.skills li',{autoAlpha:0,x:-20},
                        {autoAlpha:1,x:0,stagger:{each:0.3} ,duration:0.5},'-=1')
            setAnim(false)
        }
    },[inView,anim])

    return ( 
        <div className='about' id='about'>
            <div className='ab-heading' ref={ref}><p className='about-heading'>Digital</p><br/>
                <p className='about-heading'>Revolution</p>
            </div>
            <ul className='skills'>
                <li > &#x2609; User Interface Design</li>
                <li > &#x2609; User Experience</li>
                <li > &#x2609; Full-Stack Development</li>
                <li > &#x2609; Graphic Design</li>
                <li > &#x2609; AI-ML Models</li>
            </ul>
            <h2 className='sub-heading'>Designing the magnum opus with<br/> 
                passion, empathy and craftmanship</h2>

            <div className='work-motto'>
                {workData && workData.slice(0,2).map((motto,index) => (
                    <TextCard
                        key={index} 
                        number = {motto.work_no}
                        title = {motto.work_title}
                        body = {motto.work_body}
                    />
                ))}
            </div>
            
            <h1 className='about-heading' 
                style={{color:'#FFF8E2',
                fontSize:'5vw',
                textAlign:'center',
                fontFamily:'Roobert-Regular'}}>Believe in the impossible </h1>

            <div className='work-motto'>
                {workData && workData.slice(2).map((motto,index) => (
                    <TextCard
                        key={index} 
                        number = {motto.work_no}
                        title = {motto.work_title}
                        body = {motto.work_body}
                    />
                ))}
            </div>

            <h1 className='about-heading' 
                style={{fontSize:'5vw',
                textAlign:'left',
                fontFamily:'Roobert-Regular',
                lineHeight:'7vw'}}>Capturing quintessential<br/>craftsmanship </h1>

           
        </div>
    );
}

export default AboutSection;