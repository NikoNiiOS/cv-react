import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil";
import Services from "./pages/services";
import Realisations from "./pages/realisations";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Mentions from "./pages/mentions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<Accueil/>}/>
        <Route path="/services" element ={<Services/>}/>
        <Route path="/realisations" element ={<Realisations/>}/>
        <Route path="/blog" element ={<Blog/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/mentions" element ={<Mentions/>}/>
      </Routes>
    </div>
  );
}

export default App;
