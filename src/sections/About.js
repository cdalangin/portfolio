import React, { useState, Component } from 'react';
import "tailwindcss/tailwind.css"
import InfoBox from "../components/InfoBox"
import about from "../data/about.json"
import webdev from "../assets/webdev.svg"

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center text-center text-indigo-900 p-5">
            
            <p className="text-5xl md:text-7xl font-black mb-5">About</p>
            <div className="flex flex-col md:flex-row">
                <div className="text-left md:w-2/4 px-3">
                    <p className="sm:text-md text-lg text-gray-700 px-2 mr-1 my-3">
                        I'm a junior at Baruch College with a Computer Information Systems major and graphic art minor!
                        <br/><br/>
                        I am currently mentoring 7 amazing freshmen students as a <strong><a href="https://enrollmentmanagement.baruch.cuny.edu/success-amplified/success-network/success-in-your-first-year/peer-mentor/" target="_blank">Success Network</a></strong> Peer Mentor, helping out in 
                        organizing the <strong><a href="https://newyork.techtogether.io/" target="_blank">TechTogether New York Hackathon</a></strong> and the <strong><a href="https://cunyhackathon.tech/" target="_blank">CUNY Hackathon</a></strong>, and marketing for the 
                         <strong><a href="https://baruchais.com/"  target="_blank"> Baruch Association for Information Systems</a></strong>.
                    </p>
                </div>
                
                <div className="p-10 md:w-2/4">
                    <img
                        src={webdev}
                        alt="Web Development"
                        className="w-2/4 md:w-full m-auto" />
                </div>
            </div>
            
        </div>
    )
}