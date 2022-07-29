import { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import {gsap,Power3} from 'gsap/dist/gsap';

import './manifesto.scss'


const ManifestoSection = ({manifestoData, manUrl, mottoUrl}) => {
    const[anim, setAnim] = useState(true)
    const[anim2, setAnim2] = useState(true)
    const [ref, inView] = useInView({threshold:0.2})
    const [ref2, inView2] = useInView({threshold:0.2})
    const [ref3, inView3] = useInView({threshold:0.2})
    const [ref4, inView4] = useInView({threshold:0.2})
    useLayoutEffect(() => { 
        let tl = gsap.timeline({defaults:{ease: Power3.easeInOut}})
        if(inView && inView2 && anim){
        tl.fromTo('.wow',{autoAlpha:0,x:-100},
                        {autoAlpha:1,x:0,stagger:{each:0.4} ,duration:1.2})
        .fromTo('.para',{autoAlpha:0,skewY:8, y:70},
                        {autoAlpha:1,y:0, skewY:0, duration:1.5},"-=0.7")
        .to('.dig-img',{rotate:"-5deg", duration:0.4})
        setAnim(false)
        }
    },[inView,inView2,anim])
    useLayoutEffect(()=>{
        let tl = gsap.timeline({defaults:{ease: Power3.easeInOut}})
        if(inView3 && inView4 && anim2){
            tl.fromTo('.motto-text-section',{autoAlpha:0,x:100},
                            {autoAlpha:1,x:0,stagger:{each:0.4} ,duration:1.2})
            .fromTo('.motto-para',{autoAlpha:0,skewY:8, y:100},
                            {autoAlpha:1,y:0, skewY:0, duration:1.5},'-=1')
            .to('.pink-bg',{rotate:'-5deg',x:'-4%',duration:0.7})
            setAnim2(false)
        }
    },[inView3,inView4,anim2])

    return (  
       <div className='manifesto-section' id='manifesto'>
            <div className="manifesto-bg" 
                style={{backgroundImage:`url(${manUrl})`}}
            ></div>

            <div className="digital-exp">
                <div className="digi-text">
                    <div className='digi-heading' ref={ref2}>
                        <p className='wow'>Building</p><br/>
                        <p className='wow'>Digital</p><br/>
                        <p className='wow'>Experience</p>
                    </div>
                    <div className='overflow' ref={ref}>
                        <p className='para'>Through exquisite and refined creative art</p>
                    </div>
                </div>
                
                <div className="dig-img">
                    <Link to={"/" + manifestoData[0].slug.current}>
                    <img  src={manifestoData[0].projectImage.asset.url} alt="Digital Experience" />
                    </Link>
                </div>
            </div>

            <div className="motto">
               <div className="motto-img">
                    <img className='pink-bg' src={mottoUrl} alt="Motto bg" />
                    <Link to={"/" + manifestoData[1].slug.current}>
                    <img src={manifestoData[1].projectImage.asset.url} alt="Motto" />
                    </Link>
                </div>

                <div className="motto-text">
                    <div className='motto-heading' ref={ref4}>
                        <p className='motto-text-section'>I am a designer, developer and digital</p><br/>
                        <p className='motto-text-section'>creator aiming to dwindle the gap </p><br/>
                        <p className='motto-text-section'>between design and technology.</p>
                    </div>
                    <div className='overflow' ref={ref3}>
                    <p className='motto-para'>My motto is to create, collaborate, and develop innovative 
                        solutions that tether people and inspire communities.</p></div>
                </div>
            </div>

       </div> 
    );
}

export default ManifestoSection;