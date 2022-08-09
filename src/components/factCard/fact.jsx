import { useLayoutEffect, useState  } from 'react'
import { useInView } from 'react-intersection-observer';
import {gsap,Power3} from 'gsap/dist/gsap';
import './fact.scss'

const FactSection = () => {
    const [anim, setAnim] = useState(true)
    const [ref, inView] = useInView({threshold:0.5})
    const [anim2, setAnim2] = useState(true)
    const [ref2, inView2] = useInView({threshold:0.2})

        // Fact heading animation
        useLayoutEffect(() => {
            let tl = gsap.timeline({defaults:{ease: Power3.easeOut}})
            if(inView && anim){
                tl.fromTo('.fn',{autoAlpha:0,y:200},
                            {autoAlpha:1,y:0,stagger:{each:0.2},duration:0.8})
                setAnim(false)
            }
        },[inView])

        // Fact body animation
        useLayoutEffect(() => {
            let tl1 = gsap.timeline({defaults:{ease: Power3.easeOut}})
            if(inView2 && anim2){
                tl1.fromTo('.prompt',{autoAlpha:0, y: 100},
                            {autoAlpha:1, y:0, stagger:{each:0.4},delay:1,duration:0.8})
                setAnim2(false)
            }
        },[inView2])

    return ( 
        <div className='fact'>
            <div className='fun' ref={ref}>
                <div className='fun-text'>
                    <span className='fn'>Wanna</span> <span className='fn'>know</span> <span className='fn'>a </span> 
                    <span className='fn'>flabbergasting</span> <span className='fn'>fact</span> <span className='fn'>? </span>
                </div>
            </div>
            <p ref={ref2}><span className='prompt'>I have a story.</span> <span className='prompt'>It's the kind of story you might read in a novel: AI generates a completely hyper-realistic image using my story as a</span> 
            <span className='prompt'>prompt. Except it's not just a story. It's as real as the photorealistic image the AI created for me. Yes, you read it right! An AI </span> 
            <span className='prompt'>generated the above image using my story as it's input!</span>
            </p>
        </div>
    );
}

export default FactSection;