import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import "tailwindcss/tailwind.css"
import Portrait from "../assets/portrait.jpg"


export default function Start() {
    return (
        <div className="h-screen bg-purple-300 flex flex-col md:flex-row items-center justify-center p-4">
            <div className="text-center md:w-2/4">
                <p className="text-4xl font-black text-indigo-900">Nyello! I'm Cirill Florenz</p>
                <p className="text-3xl text-indigo-800">An aspiring Frontend Developer who loves to crochet</p>
            </div>
            <div className="p-5 md:w-2/4">
                <img
                    src={Portrait}
                    alt="Picture of Cirill"
                    className="m-auto" />
            </div>

        </div>
    )
}