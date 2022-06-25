import { useEffect,useState } from 'react';
import sanityClient from '../../client';

import TextCard from '../text-card/text-card';

import './about.scss'


const AboutSection = () => {
    const[workData, setWorkData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "work"] | order(work_no){
                work_no,
                work_title,
                work_body
            }`
        )
        .then((data) => setWorkData(data))
        .catch(console.error)
    }, []);

    return ( 
        <div className='about' id='about'>
            <h1 className='about-heading'>Digital <br/>Revolution </h1>
            <ul className='skills'>
                <li> &#x2609; User Interface Design</li>
                <li> &#x2609; User Experience</li>
                <li> &#x2609; Full-Stack Development</li>
                <li> &#x2609; Graphic Design</li>
                <li> &#x2609; AI-ML Models</li>
            </ul>
            <h2 className='sub-heading'>Designing the magnum opus with<br/> 
                passion, empathy and craftmanship</h2>

            <div className='work-motto'>
                {workData && workData.slice(0,2).map((motto,index) => (
                    <TextCard
                        key={index} 
                        number = {motto.work_no}
                        title = {motto.work_title}
                        body = {motto.work_body}
                    />
                ))}
            </div>
            
            <h1 className='about-heading' 
                style={{color:'#FFF8E2',
                fontSize:'5vw',
                textAlign:'center',
                fontFamily:'Roobert-Regular'}}>Believe in the impossible </h1>

            <div className='work-motto'>
                {workData && workData.slice(2).map((motto,index) => (
                    <TextCard
                        key={index} 
                        number = {motto.work_no}
                        title = {motto.work_title}
                        body = {motto.work_body}
                    />
                ))}
            </div>

            <h1 className='about-heading' 
                style={{fontSize:'5vw',
                textAlign:'left',
                fontFamily:'Roobert-Regular',
                lineHeight:'7vw'}}>Capturing quintessential<br/>craftsmanship </h1>

           
        </div>
    );
}

export default AboutSection;