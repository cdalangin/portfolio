import React from 'react';
import { TabGroup } from '@statikly/funk'
import "tailwindcss/tailwind.css"
import Card from "../components/Card.js"
import fellowship from "../data/fellowship.json"
import games from "../data/games.json"
import misc from "../data/misc.json"


export default function Project() {
    return (
        <div className="items-center py-2 px-2 grid grid-row-2 mb-10">

            <p className="text-7xl font-black text-indigo-400 text-center">Projects</p>

        </div >
    )
}