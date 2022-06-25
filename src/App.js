import { Routes, Route, useLocation } from "react-router-dom"; 
import { AnimatePresence } from "framer-motion";

import CustomCursor from "./components/custom-cursor";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/Home";
import ProjectPage from "./pages/projectPage";



function App() {
  const location = useLocation()
  return (
    <>
    <CustomCursor/>
    <Navbar/>
    <AnimatePresence  exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:slug" element={<ProjectPage/>}/>
      </Routes>
    </AnimatePresence>
    </>
  );
}

export default App;
