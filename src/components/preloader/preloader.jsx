import { useLayoutEffect, useState } from 'react';
import {gsap,Power3,Power4} from 'gsap/dist/gsap';
import { motion, AnimatePresence } from 'framer-motion';

import './preloader.scss'

const PreLoader = () => {

    const transition = {duration: 1, ease: [0.6, 0.01, -0.05, 0.9]}

    function reverseRepeat(tl) {
        tl.reverse(0); // 0 sets the playhead at the end of the animation
      }
         
      function complete(tl) {
        tl.restart(); // 0 sets the playhead at the end of the animation
      }

    var tl = gsap.timeline({defaults:{ease: Power3.easeInOut},onReverseComplete:reverseRepeat,
        onReverseCompleteParams:['{self}'],
        onComplete:complete,
        onCompleteParams:['{self}'],
        repeat:-1
    })

    useLayoutEffect(() => {
        

        tl.fromTo('.heading-container p',{autoAlpha:0,y:100,skewY:12},
        {autoAlpha:1,y:0,skewY:0,stagger:{each:0.1} ,duration:0.5})
        .to('.heading-container p',{marginRight:'5vw'})
        .fromTo('.para p',{autoAlpha:0,y:50,skewY:10},
        {autoAlpha:1,y:0,skewY:0,duration:0.8})

        // return () => tl.kill()
    },[])
    return ( 
        <AnimatePresence exitBeforeEnter>
        <motion.div className='loader-bg' key="preloader"
            exit={{height:0,transition: {delay:0.3,...transition}}}>
            <div className='heading-container'>
                <p className='first'>F</p>
                <p className='last'>L</p>
                <p className='last'>A</p>
                <p className='last'>S</p>
                <p className='last'>H</p>
                <p className='last'>C</p>
                <p className='last'>A</p>
                <p className='last'>P</p>
                <p className='last'>A</p>
                <p className='last'>D</p>
                <p className='last'>E</p>
            </div>
            <div className='para'>
                <p>Where design meets technology</p>
            </div>
        </motion.div>
        </AnimatePresence>
    );
}

export default PreLoader;