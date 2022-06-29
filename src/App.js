import { useState, useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import { AnimatePresence } from "framer-motion";
import useFetch from "./fetchData";

import CustomCursor from "./components/custom-cursor";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/Home";
import ProjectPage from "./pages/projectPage";
import Loader from "./components/loader/loader";

function App() {
  const location = useLocation()
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


  return (
    loading ? <Loader/> : 
    <div>
      <CustomCursor/>
      <Navbar/>
      <AnimatePresence  exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage project={project} work={work}/>} />
          <Route path="/:slug" element={<ProjectPage/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
