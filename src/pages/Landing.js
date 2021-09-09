import React, { useState, Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import "tailwindcss/tailwind.css"

import Navbar from "../components/Navbar.js"
import Footer from '../components/Footer.js'

import Start from '../sections/Start.js'
import About from '../sections/About.js'
import Experience from '../sections/Experience.js'
import Contact from '../sections/Contact.js'
// import Projects from '../sections/Projects.js'
import Project from '../sections/Project.js'


export default function Landing() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="h-full bg-purple-300">
            {/* <Navbar /> */}
            <Start />
            <div className="bg-gradient-to-b from-purple-300 to-purple-400">
                <About />
                <Experience />
                {/* <Projects /> */}
                <Project />
                <Contact />
                <Footer />
            </div>

        </div>
    )
}