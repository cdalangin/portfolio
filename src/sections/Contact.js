import React, { useState, Component } from 'react';
import "tailwindcss/tailwind.css"
import { Link, Redirect, State } from 'react-router-dom';


export default function Contact() {
    return (
        <div className="w-full bg-no-repeat" style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: "url('https://u.cubeupload.com/cdalangin/buildingsblur.jpg')",
        }}>
            <div className=" p-10  py-15  flex  flex-col">
                <div className=" mb-5  p-2  text-6xl font-black text-white  antialiased  text-center">OPEN FOR FALL 2021 INTERNSHIPS</div>
                <a className="m-auto" href="mailto:ishadalangin@gmail.com">
                    <button
                        className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                        Contact Me
                    </button>
                </a>
            </div>
        </div >
    )
}