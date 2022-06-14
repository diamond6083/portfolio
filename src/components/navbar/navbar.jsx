import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'

import {ReactComponent as Logo} from './Logo.svg'

const Navbar = () => {

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

    return ( 
       <nav className={navbar ? 'navbar' : 'navbar hidden'}>
            <Link to='/' className='logo'> <Logo stroke='white' width={80}/> </Link>
            <div className="links">
                <Link to='#'>WORK</Link>
                <Link to='#'>MANIFESTO</Link>
                <Link to='#'>CONTACT</Link>
                <Link to='#'>ABOUT</Link>
            </div>
       </nav> 
    );
}

export default Navbar;