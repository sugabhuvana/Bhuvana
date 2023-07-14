import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/NavBar";
function App(){
  return(
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/About" element={<About/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;