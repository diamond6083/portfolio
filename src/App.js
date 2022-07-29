import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import { AnimatePresence } from "framer-motion";
import useFetch from "./fetchData";

import CustomCursor from "./components/custom-cursor";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/Home";
import ProjectPage from "./pages/projectPage";
import PreLoader from "./components/preloader/preloader";

function App() {
  const location = useLocation()
  const [nav, setNav] = useState(false)
  const [load, setLoad] = useState(true)
  const [loading, setLoading] = useState(true)
  const [touch, setTouch] = useState(false)
  const project = useFetch('project')
  const work = useFetch('work')
  const misc = useFetch('misc')
  
  //Fetching project data and setting load state
  useEffect(() => {
   if(project && work && misc){
    setLoading(false)
   }else if(project.error || work.error){
    console.error(project.error, work.error)
   }
  }, []);
  
  // Disabling navbar in projects page
  useEffect(() => {
    const {pathname} = location
    if(pathname === '/')
      setNav(true)
    else
      setNav(false)
  }, [location]);

  const Loading = () => setLoad(false)

  // Checking for entire app loading
  useEffect(() => {
    if(load){
      window.addEventListener('load',Loading)
      return () => window.removeEventListener('load',Loading)
    }
  }, []);

  //Checking touchscreen devices
  useEffect(() => {
    if(window.matchMedia("(pointer: coarse)").matches) {
      setTouch(true)
    }
  },[])

  return (
    loading | load ? <PreLoader/> : 
    <div>
      {!touch ? <CustomCursor/> : ''}
      {nav && <Navbar/>}
      <AnimatePresence  exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage project={project} work={work} misc={misc} />} />
          <Route path="/:slug" element={<ProjectPage/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
