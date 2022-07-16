import { useLayoutEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {gsap,Power3,Power4} from 'gsap/dist/gsap';

import './story.scss'

const StorySection = () => {
    const [anim, setAnim] = useState(true)
    const [ref, inView] = useInView({threshold:0.6})

    useLayoutEffect(() => {
        let tl = gsap.timeline({defaults:{ease: Power3.easeOut}})
        if(inView && anim){
            tl.fromTo('.story-heading p',{autoAlpha:0,y:100,skewX:10},
                        {autoAlpha:1,y:0,skewX:0,duration:1})
            .fromTo('.story-body-text',{autoAlpha:0,y:100,skewX:-10},
                        {autoAlpha:1,y:0,skewX:0,duration:1},'-=0.6')
            setAnim(false)
            return () => tl.kill()
        }
    },[inView])
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
            <div className="story-img">Hello</div>
       </div> 
    );
}

export default StorySection;