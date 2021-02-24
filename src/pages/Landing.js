import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import "tailwindcss/tailwind.css"

import Navbar from "../components/Navbar.js"
import Footer from '../components/Footer.js'

import Start from '../sections/Start.js'
import About from '../sections/About.js'
import Experience from '../sections/Experience.js'
import Contact from '../sections/Contact.js'
import Projects from '../sections/Projects.js'


export default function Landing() {
    return (
        <div className="h-full bg-gradient-to-b from-indigo-100 to-purple-300">
            {/* <Navbar /> */}
            <Start />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />

        </div>
    )
}