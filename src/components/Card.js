import React from 'react';
import "tailwindcss/tailwind.css"



export default function Card(props) {
    let items = props.dataSource

    return (
        <div className="flex flex-row flex-wrap justify-center mt-5 ">
            {items.map(project => (

                <div className="max-w-xs rounded-xl overflow-hidden shadow-lg my-3 mr-5 bg-white">
                    <img
                        src={project.image}
                        alt={project.name}
                    />

                    <div class="px-6 py-4 bg-white">
                        <div class="font-bold text-xl mb-2">{project.name}</div>

                        <p class="text-grey-darker text-base">
                            {project.desc}
                        </p>

                        <div className="flex flex-row space-x-4 justify-center py-4">
                            <a href={project.demoURL}>
                                <button
                                    className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                                    Demo
                                </button>
                            </a>

                            <a href={project.githubURL}>
                                <button
                                    className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                                    Github
                                </button>
                            </a>
                        </div>
                    </div>


                </div>

            ))}
        </div>
    )
}