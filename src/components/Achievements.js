import React from 'react';
import "tailwindcss/tailwind.css"

export default function Achievements(props) {
    let prize = props.prize


    if (prize != "N/A") {
        return (
            <div class="font-bold text-gray-700 text-lg mb-2">{prize}</div>
        )
    }

    return null



}