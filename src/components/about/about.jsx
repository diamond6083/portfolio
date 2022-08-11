import React from 'react';
import { useLayoutEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {gsap,Power3,Power4} from 'gsap/dist/gsap';

import TextCard from '../text-card/text-card';

import './about.scss'

const AboutSection = ({workData}) => {
    const [anim, setAnim] = useState(true)
    const [anim2, setAnim2] = useState(true)
    const [anim3, setAnim3] = useState(true)
    const [anim4, setAnim4] = useState(true)
    
    const [ref, inView] = useInView({threshold:0.6})
    const [ref2, inView2] = useInView({threshold:0.4})
    const [ref3, inView3] = useInView({threshold:0.6})
    const [ref4, inView4] = useInView({threshold:0.4})


    // Headings Animation
    useLayoutEffect(() => {
        let tl = gsap.timeline({defaults:{ease: Power3.easeOut}})
        if(inView && anim){
            tl.fromTo('.about-heading',{autoAlpha:0,y:100},
                        {autoAlpha:1,y:0,stagger:{each:0.4} ,duration:1})
            .fromTo('.skills li',{autoAlpha:0,x:-20},
                        {autoAlpha:1,x:0,stagger:{each:0.3} ,duration:0.5},'-=1')
            setAnim(false)
        }
    },[inView])

    // Magnum Opus animation
    useLayoutEffect(() => {
        let tl1 = gsap.timeline({defaults:{ease: Power4.easeOut}})
        if(inView3 && anim3){
            tl1.fromTo('.sub-heading p',{autoAlpha:0,y:100,skewY:7},
                    {autoAlpha:1,y:0,skewY:0,stagger:{each:0.5} ,duration:1})
            setAnim3(false)
        }
    },[inView3])

    // Motto-quote animation 1
    useLayoutEffect(() => {
        let tl = gsap.timeline({defaults:{ease: Power4.easeOut}})
        if(inView2 && anim2){
            tl.fromTo('.work-text-no',{autoAlpha:0,y:100},
                        {autoAlpha:1,y:0,duration:1})
            .fromTo('.motto-title',{autoAlpha:0,x:-50},
                        {autoAlpha:1,x:0,duration:0.8},'-=0.4')
            .fromTo('.motto-body',{autoAlpha:0,y:50,skewY:6},
                        {autoAlpha:1,y:0,skewY:0,duration:1})
            setAnim2(false)
        }
    },[inView2])

    //Quintissential heading animation
    useLayoutEffect(() => {
        let tl = gsap.timeline({defaults:{ease: Power4.easeOut}})
        if(inView4 && anim4){
            tl.fromTo('.quinti p',{autoAlpha:0,y:100,skewY:7},
            {autoAlpha:1,y:0,skewY:0,stagger:{each:0.4} ,duration:0.9})
            setAnim4(false)
        }
    },[inView4])

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
            <div className='sub-heading' ref={ref3}><p>Designing the magnum opus with</p><br/> 
                <p>passion, empathy and craftmanship</p></div>

            <div className='work-motto'>
                {workData && workData.slice(0,2).map((motto,index) => (
                    <TextCard
                        key={index} 
                        number = {motto.work_no}
                        title = {motto.work_title}
                        body = {motto.work_body}
                        ref = {ref2}
                    />
                ))}
            </div>
            
            <marquee className='about-heading' 
                id='marquee'
                style={{color:'#FFF8E2',
                textAlign:'center',
                fontFamily:'Roobert-Regular'}}
                behavior="scroll" direction="left" scrollamount="17"
                >Believe in the impossible </marquee>

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

            <div className='quinti' ref={ref4}>
                <p>Capturing quintessential</p> <br/>
                <p>craftsmanship</p>
            </div>

           
        </div>
    );
}

export default React.memo(AboutSection);