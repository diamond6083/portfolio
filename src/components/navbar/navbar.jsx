import { useEffect,useState } from 'react';
import { Link } from 'react-scroll';
import {gsap,Power3} from 'gsap/dist/gsap';
import { HiMenuAlt4 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi"
import './navbar.scss'

import {ReactComponent as Logo} from './Logo.svg'

let tl = gsap.timeline({defaults:{ease: Power3.easeOut}})

const Navbar = () => {
    const [contactVisible, setContactVisible] = useState(false)
    const [navbar, setNavbar] = useState(true)
    const [click, setClick] = useState(false)
    const [mobile, setMobile] = useState(false) 
    const hideNav = (e) => {
        if(e.wheelDeltaY < 0)
            setNavbar(false)
        else
            setNavbar(true)
    }

    const handleClick = () => {
        tl.from('.links',{opacity:0,duration:0.3})
        .from('.link',{skewY:12,y:'150%',stagger:{each:0.2}, duration:0.6},'-=0.2') 
    }

    useEffect(() => {
        window.addEventListener("wheel", hideNav)
        return () => window.removeEventListener("wheel", hideNav)
    }, []);

    useEffect(()=>{
        if(document.querySelector('#contact')){
            const observer = new IntersectionObserver((entries) => {
                const entry = entries[0]
                setContactVisible(entry.isIntersecting)
            },
            { threshold: 0 })
            observer.observe(document.querySelector('#contact'))
        }
        
    },[])

    return ( 
       <nav className={navbar ? 'navbar' : 'navbar hidden'} >
            <Link to='hero' className='logo'> <Logo width={80}/> </Link>
            <div className={mobile ? 'links active' : 'links'}>
                <Link onClick={()=>{setMobile(!mobile); setClick(!click)}} to='work' 
                className='connect'>
                    <div className='link'>WORK</div>
                </Link>
                <Link onClick={()=>{setMobile(!mobile); setClick(!click)}} to='manifesto' 
                className='connect' >
                    <div className='link'>MANIFESTO</div>
                </Link>
                <Link onClick={()=>{setMobile(!mobile); setClick(!click)}} to='contact' 
                className='connect'>
                    <div className='link'>CONTACT</div>
                </Link>
                <Link onClick={()=>{setMobile(!mobile); setClick(!click)}} to='about' 
                className='connect'>
                    <div className='link'>ABOUT</div>
                </Link>
            </div>
            <div className='menu-icon' onClick=
                {()=>{
                    setMobile(!mobile)
                    setClick(!click)
                }}>
                {click ? <HiOutlineX color='white' size={30}/> : 
                <HiMenuAlt4 color='white' size={30} onClick={()=> handleClick()} />} 
            </div>
       </nav> 
    );
}

export default Navbar;