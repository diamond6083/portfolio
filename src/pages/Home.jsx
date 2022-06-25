
import HeroSection from "../components/hero/hero";
import WorkSection from "../components/work/work";
import ManifestoSection from "../components/manifesto/manifesto";
import AboutSection from "../components/about/about";
import Craftsmanship from "../components/craftsmanship/craftsmanship";
import StorySection from "../components/story/story";
import ContactSection from "../components/contact/contact";

const HomePage = () => {
    return ( 
        <>
            <HeroSection/>
            <WorkSection/>
            <ManifestoSection/>
            <AboutSection/>
            <Craftsmanship/>
            <StorySection/>
            <ContactSection/>
        </>
    );
}

export default HomePage ;