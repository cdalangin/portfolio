import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import "tailwindcss/tailwind.css"
import { Link, Redirect, State } from 'react-router-dom';


export default function Start() {
    return (
        <div className="h-screen grid grid-cols-2 gap-3 flex items-center p-3">
            <div className="text-center">
                <p className="text-4xl font-black text-white">Hi! I'm Cirill Florenz</p>
                <p className="text-3xl text-gray-500">I'm a Hackathon and Boba Enthusiast</p>
            </div>
            <div className="p-5">
                <img
                    src="https://u.cubeupload.com/cdalangin/me.png"
                    alt="landing image"
                    className="h-auto" />
            </div>

        </div>
    )
}