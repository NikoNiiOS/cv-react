import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import TopScrollButton from "./components/topScroll";
import UserGithub from "./components/github";
import Accueil from "./pages/accueil";
import Services from "./pages/services";
import Realisations from "./pages/realisations";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Mentions from "./pages/mentions";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Routes>
          <Route path="/" element ={<Accueil/>}/>
          <Route path="/services" element ={<Services/>}/>
          <Route path="/realisations" element ={<Realisations/>}/>
          <Route path="/blog" element ={<Blog/>}/>
          <Route path="/contact" element ={<Contact/>}/>
          <Route path="/mentions" element ={<Mentions/>}/>
          <Route path="/user" element ={<UserGithub/>}/>
        </Routes>
        <TopScrollButton />
      </HelmetProvider>
    </div>
  );
}

export default App;
