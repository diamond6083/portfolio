import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import { AnimatePresence } from "framer-motion";
import useFetch from "./fetchData";

import CustomCursor from "./components/custom-cursor";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/Home";
import ProjectPage from "./pages/projectPage";
import Loader from "./components/loader/loader";
import PreLoader from "./components/preloader/preloader";

function App() {
  const location = useLocation()
  const [nav, setNav] = useState(false)
  const [load, setLoad] = useState(true)
  const [loading, setLoading] = useState(true)
  const project = useFetch('project')
  const work = useFetch('work')

  useEffect(() => {
   if(project && work){
    setLoading(false)
   }else if(project.error || work.error){
    console.error(project.error, work.error)
   }
  }, []);

  useEffect(() => {
    const {pathname} = location
    if(pathname === '/')
      setNav(true)
    else
      setNav(false)
  }, [location]);

  const Loading = () => setLoad(false)

  useEffect(() => {
    if(load){
      window.addEventListener('load',Loading)
      return () => window.removeEventListener('load',Loading)
    }
  }, []);

  return (
    loading | load ? <PreLoader/> : 
    <div>
      <CustomCursor/>
      {nav && <Navbar/>}
      <AnimatePresence  exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage project={project} work={work}/>} />
          <Route path="/:slug" element={<ProjectPage/>}/>
          <Route path="/test" element={<PreLoader/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
