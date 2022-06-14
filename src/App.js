import { Routes, Route } from "react-router-dom"; 

import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/Home/Home";
import WorkSection from "./components/work/work";

function App() {
  return (
   <>
   <Navbar/>
     <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/work" element={<WorkSection/>} />
     </Routes>
   </>
  );
}

export default App;
