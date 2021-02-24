import React from 'react';
import "tailwindcss/tailwind.css"

export default function Tech(props) {
    let technologies = props.technologies

    return (
        <div className="flex flex-row flex-wrap justify-center mt-2 ">
            {technologies.map(tech => (
                <button
                    className="bg-purple-300 text-white font-medium py-1 px-3 border-b-4 border-purple-400 hover:border-purple-300 rounded-xl focus:outline-none cursor-default m-1">
                    {tech}
                </button>
            ))}
        </div>
    )


}