import React, { useState, Component } from 'react';
import "tailwindcss/tailwind.css"
import InfoBox from "../components/InfoBox"
import about from "../data/about.json"


export default function About() {
    return (
        <div className="flex items-center p-5 grid grid-row-2">
            <div className="text-center text-gray-50">
                <p className="text-7xl font-black">About</p>
                <InfoBox expSource={about} />
            </div>
            <div>

            </div>
        </div>
    )
}