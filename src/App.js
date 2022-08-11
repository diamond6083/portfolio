import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import { AnimatePresence } from "framer-motion";

import useFetch from "./fetchData";

import ErrorBoundary from "./components/error-boundary/error-boundary";
import CustomCursor from "./components/custom-cursor";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/Home";
import PreLoader from "./components/preloader/preloader";
import Loader from "./components/loader/loader";

// Lazy loading
const ProjectPage = lazy( () => import('./pages/projectPage') )

function App() {
  const location = useLocation()
  const [nav, setNav] = useState(false)
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


  //Checking touchscreen devices
  useEffect(() => {
    if(window.matchMedia("(pointer: coarse)").matches) {
      setTouch(true)
    }
  },[])

  return (
    loading ? <PreLoader/> : 
    <div>
      {!touch ? <CustomCursor/> : ''}
      {nav && <Navbar/>}
      <ErrorBoundary>
        <Suspense fallback={<Loader/>}>
        <AnimatePresence  exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage project={project} work={work} misc={misc} />} />
            <Route path="/:slug" element={<ProjectPage/>}/>
          </Routes>
        </AnimatePresence>
        </Suspense>
      </ErrorBoundary>   
    </div>
  );
}

export default App;
