import { Link } from "react-scroll"

import { GrLayer } from "react-icons/gr"
import { IoIosArrowRoundForward } from "react-icons/io"

import './contact.scss'



const ContactSection = () => {
    const year = new Date().getFullYear()
    return ( 
        <div className='contact' id="contact">
            <div className="contact-text">
                <IoIosArrowRoundForward color="black" />
                <p>Contact</p>
            </div>

            <div className="contact-heading">
                <h1>Keep in touch</h1>
                <GrLayer color="black" size={window.innerWidth/70}/>
            </div> 

            <p className="conversation">Start a conversation</p>

            <a href="mailto:flashcapade@gmail.com" className="email-link">
                flashcapde@gmail.com</a>

            <div className="footer">
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