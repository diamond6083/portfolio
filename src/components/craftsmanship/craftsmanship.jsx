import { useLayoutEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {gsap,Power3} from 'gsap/dist/gsap';

import './craftsmanship.scss'

const Craftsmanship = ({craftsUrl}) => {
    const [anim,setAnim] = useState(true)
    const [ref, inView] = useInView({threshold:0.5})
    useLayoutEffect(() => {
        if(inView && anim){
            let tl = gsap.timeline({defaults:{ease: Power3.easeInOut}})
            tl.to('.craft-img',{clipPath:'circle(70.7% at 50% 50%)',delay:0.1,duration:1.6})
            setAnim(false)
        }
    },[inView,anim])

    return ( 
        <div className='craftsmansip' id='craftsmanship' ref={ref}>
            <img className='craft-img' 
                src={craftsUrl}
                alt="Craftsmanship"
            />
        </div>
    );
}

export default Craftsmanship;