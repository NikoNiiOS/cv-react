import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

export default function Header(){
    const loc = useLocation();
    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid nav-padd">
                    <Link className="navbar-brand" to="/">John Doe</Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className={`nav-item ${loc.pathname === "/" ? "active" : ""}`}>
                                <Link className="nav-link" to="/">Accueil</Link>
                            </li>
                            <li className={`nav-item ${loc.pathname === "/services" ? "active" : ""}`}>
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className={`nav-item ${loc.pathname === "/realisations" ? "active" : ""}`}>
                                <Link className="nav-link" to="/realisations">Réalisations</Link>
                            </li>
                            <li className={`nav-item ${loc.pathname === "/blog" ? "active" : ""}`}>
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className={`nav-item ${loc.pathname === "/contact" ? "active" : ""}`}>
                                <Link className="nav-link" to="/contact">Me contacter</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}