
import './manifesto.scss'


const ManifestoSection = () => {
    return (  
       <div className='manifesto-section'>
            <div className="manifesto-bg"></div>

            <div className="digital-exp">
                <div className="digi-text">
                    <h1>Building <br/>Digital <br/>Experience</h1>
                    <p>Through exquisite and refined creative art</p>
                </div>
                
                <div className="dig-img">
                    <img src="https://i.ibb.co/P4MYffG/Digi-exp.png" alt="Digital Experience" />
                </div>
            </div>

            <div className="motto">
               <div className="motto-img">
                    <img className='pink-bg' src="https://i.ibb.co/3Tmb7N4/motto-pic-bg.png" alt="Motto bg" />
                    <img src="https://i.ibb.co/Mks6ytG/Motto-pic.png" alt="Motto" />
                </div>

                <div className="motto-text">
                    <h1>I am a designer, developer and digital 
                        creator aiming to dwindle the gap 
                        between design and technology.</h1>
                    <p>My motto is to create, collaborate, and develop innovative 
                        solutions that tether people and inspire communities.</p>
                </div>
            </div>

       </div> 
    );
}

export default ManifestoSection;