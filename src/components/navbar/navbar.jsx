import { useEffect,useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.scss'

import {ReactComponent as Logo} from './Logo.svg'

const Navbar = () => {
    const [contactVisible, setContactVisible] = useState(false)
    const [navbar, setNavbar] = useState(true)
    const hideNav = (e) => {
        if(e.wheelDeltaY < 0)
            setNavbar(false)
        else
            setNavbar(true)
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
            <div className={contactVisible ? 'links active' : 'links'}>
                <Link to='work'>WORK</Link>
                <Link to='manifesto'>MANIFESTO</Link>
                <Link to='contact'>CONTACT</Link>
                <Link to='about'>ABOUT</Link>
            </div>
       </nav> 
    );
}

export default Navbar;