import { useLayoutEffect, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {gsap,Power3} from 'gsap/dist/gsap';
import hoverEffect from 'hover-effect'

import './story.scss'

const StorySection = ({story1, story2}) => {
    const [anim, setAnim] = useState(true)
    const [ref, inView] = useInView({threshold:0.6})

    
    // Story text animation
    useLayoutEffect(() => {
        let tl = gsap.timeline({defaults:{ease: Power3.easeOut}})
        if(inView && anim){
            tl.fromTo('.story-heading p',{autoAlpha:0,y:100,skewX:10},
                        {autoAlpha:1,y:0,skewX:0,duration:1})
            .fromTo('.story-body-text',{autoAlpha:0,y:100,skewX:-10},
                        {autoAlpha:1,y:0,skewX:0,duration:1},'-=0.6')
            setAnim(false)
        }
    },[inView])


    // Dispersion hover effect
    useEffect(() => {
        var image_animate = new hoverEffect({
            parent: document.querySelector('#frame-1'),
            intensity: 0.3,
            imagesRatio: 1,
            image1: story1,
            image2: story2,
            displacementImage: 'https://i.ibb.co/dK0dfSn/overlay.png'
        })
    }, []);

    return (  
       <div className='story-section' id='story'>
            <div className="story-text">
                <div className='story-heading' ref={ref}><p>My Story</p></div>
                <p className='story-body-text'>The story revolves around exploration,<br/>
                    artistry, and novelty! <br/><br/>

                    Inspired by comics, superheroes, and the world of
                    art and aesthetics, I decided to tap into the field of
                    craftsmanship and development. Intrigued by
                    technology and fuelled by everlasting passion towards
                    digital finesse, my motto is to create virtuous meaningful
                    digital experiences.
                </p>
            </div>
            
            <div className="story-img" id='frame-1'></div>
       </div> 
    );
}

export default StorySection;