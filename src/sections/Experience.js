import React, { useState, Component } from 'react';
import "tailwindcss/tailwind.css"
import InfoBox from "../components/InfoBox"
import experience from "../data/experience.json"


export default function Experience() {
    return (
        <div className="flex items-center p-5 grid grid-row-2">
            <div className="text-center text-gray-50">
                <p className="text-7xl font-black">Experience</p>
                <InfoBox expSource={experience} />
            </div>
            <div>

            </div>
        </div>
    )
}