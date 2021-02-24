import React from 'react';
import "tailwindcss/tailwind.css"
import Buttons from './Buttons.js'
import Achievements from './Achievements.js'
import Tech from './Tech.js'

export default function Card(props) {
    let items = props.dataSource
    let prize;

    if (items.prize != "N/A") {
        prize = items.prize
    }


    return (
        <div className="flex flex-row flex-wrap justify-center mt-5 ">
            {items.map(project => (

                <div className="max-w-xs rounded-xl overflow-hidden shadow-lg my-3 mr-5 bg-white">

                    <img
                        src={project.image}
                        alt={project.name}
                    />

                    <div class="px-6 py-4 bg-white">

                        <div class="font-bold text-2xl mb-2">{project.name}</div>

                        <Achievements
                            prize={project.prize} />


                        <p class="text-grey-darker text-base">
                            {project.desc}

                        </p>
                        <div className="flex flex-row space-x-4 justify-center py-4">
                            <Tech
                                technologies={project.technologies}
                            />
                        </div>
                        <div className="flex flex-row space-x-4 justify-center py-4">

                            <Buttons
                                url1={project.url1}
                                button1={project.button1}
                                url2={project.url2}
                                button2={project.button2} />
                        </div>
                    </div>
                </div>
            ))}

        </div>

    )
}