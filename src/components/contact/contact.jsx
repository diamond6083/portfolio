import { useLayoutEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {gsap,Power3,Power4} from 'gsap/dist/gsap';
import { Link } from "react-scroll"

import { GrLayer } from "react-icons/gr"
import { IoIosArrowRoundForward } from "react-icons/io"

import './contact.scss'

const ContactSection = () => {
    const year = new Date().getFullYear()
    const [ref, inView] = useInView({threshold:0.4})
    const [ref2, inView2] = useInView({threshold:0.4})
    const [anim, setAnim] = useState(true)
    const [anim2, setAnim2] = useState(true)

    useLayoutEffect(() => {
        let tl = gsap.timeline({defaults:{ease: Power3.easeOut}})
        if(inView && anim){
            tl.fromTo('.contact-heading h1',{autoAlpha:0,y:100,skewY:9},
                        {autoAlpha:1,y:0,skewY:0,duration:1})
            .fromTo('.conversation',{autoAlpha:0,x:-100},
                        {autoAlpha:1,x:0,duration:0.9},'-=0.5')
            setAnim(false)
        }
        return () => tl.kill()
    },[inView])

    useLayoutEffect(() => {
        let tl = gsap.timeline({defaults:{ease: Power3.easeOut}})
        if(inView2 && anim2){
            tl.fromTo('.navigate a',{autoAlpha:0,y:30},
                        {autoAlpha:1,y:0,stagger:{each:0.3},duration:1.2})
            .fromTo('.follow a',{autoAlpha:0,y:-30},
                        {autoAlpha:1,y:0,stagger:{each:0.3},duration:1.2},'-=0.8')
            setAnim2(false)
        }
        return () => tl.kill()
    },[inView2])
    return ( 
        <div className='contact' id="contact">
            <div className="contact-text">
                <IoIosArrowRoundForward color="black" />
                <p>Contact</p>
            </div>

            <div className="contact-heading" ref={ref}>
                <h1>Keep in touch</h1>
                <GrLayer color="black" size={window.innerWidth/70}/>
            </div> 

            <p className="conversation">Start a conversation</p>

            <a href="mailto:flashcapade@gmail.com" className="email-link">
                flashcapde@gmail.com</a>

            <div className="footer" ref={ref2}>
                <div className="navigate">
                    <p className="footer-header">Navigate</p>
                    <Link to="work">Work</Link>
                    <Link to="manifesto">Manifesto</Link>
                    <Link to="about">About</Link>
                </div>
                <div className="follow">
                    <p className="footer-header">Follow me</p>
                    <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                    <a href="https://www.behance.net/" target="_blank">Behance</a>
                    <a href="https://dribbble.com/" target="_blank">Dribbble</a>
                </div>
            </div>

            <p className="year">&#169; <span>Flashcapade, {year}</span></p>
        </div>
    );
}

export default ContactSection;