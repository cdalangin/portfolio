import { list } from 'postcss';
import React from 'react';
import "tailwindcss/tailwind.css"



export default function InfoBox(props) {

    let items = props.expSource

    return (
        <div className="flex flex-row flex-wrap justify-center mt-5 ">
            {items.map(exp => (
                <div className="m-auto px-4 py-8 max-w-xs rounded-xl">
                    <div className="bg-white shadow-2xl" >
                        <div>
                            <img src={exp.image} />
                        </div>
                        <div className="px-4 py-2 mt-2 bg-white ">
                            <h2 className="font-bold text-2xl text-gray-800">{exp.title}</h2>
                            <h2 className="font-bold text-md text-gray-700">{exp.position}</h2>
                            <h2 className="font-bold text-xs text-gray-600">{exp.time}</h2>

                            {exp.list.map(desc => (
                                <p className="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">{desc}</p>


                            ))}

                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}