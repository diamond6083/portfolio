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

  // Disabling inspect element in website
  useEffect(() => {
    document.addEventListener("contextmenu", function(e){ 
      e.preventDefault(); 
    }, false); 

      document.addEventListener("keydown", function(e) { 
      //document.onkeydown = function(e) { 
      // "I" key 
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { 
        disabledEvent(e); 
      } 
      // "J" key 
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) { 
      disabledEvent(e); 
      } 
      // "S" key + macOS 
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) { 
        disabledEvent(e); 
      } 
      // "U" key 
      if (e.ctrlKey && e.keyCode == 85) { 
        disabledEvent(e); 
      } 
      // "F12" key 
      if (e.keyCode == 123) { 
        disabledEvent(e); 
      } 
      // "C" key 
      if (e.ctrlKey && e.keyCode == 67) { 
        disabledEvent(e); 
      } 
      }, false); 
      function disabledEvent(e){ 
        if (e.stopPropagation){ 
          e.stopPropagation(); 
        } else if (window.e){ 
          window.e.cancelBubble = true; 
        } 
        e.preventDefault(); 
        return false; 
    }
  }, []);

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
