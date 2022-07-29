import HeroSection from "../components/hero/hero";
import WorkSection from "../components/work/work";
import ManifestoSection from "../components/manifesto/manifesto";
import AboutSection from "../components/about/about";
import Craftsmanship from "../components/craftsmanship/craftsmanship";
import StorySection from "../components/story/story";
import ContactSection from "../components/contact/contact";
import PreLoader from "../components/preloader/preloader";

const HomePage = ({project, work, misc}) => {
    return ( 
        project.data && work.data && misc.data ? (
        <>
            <HeroSection heroUrl = {misc.data[0].heroImg.asset.url}/>
            <WorkSection projectData = {project.data}/>
            <ManifestoSection manifestoData = {project.data.slice(-2)} 
                manUrl = {misc.data[0].manifestoImg.asset.url}
                mottoUrl = {misc.data[0].mottoImgBg.asset.url}
            />
            <AboutSection workData = {work.data} />
            <Craftsmanship craftsUrl = {misc.data[0].craftsManshipImg.asset.url} />
            <StorySection/>
            <ContactSection/>
        </>
        ) : <PreLoader/>
    );
}

export default HomePage ;