import React, { useState, Component } from 'react';
import "tailwindcss/tailwind.css"
// import InfoBox from "../components/InfoBox"
import {items} from "../data/Exp.js"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {

    return (
        <div className="flex items-center p-5 grid grid-row-2">
            <div className="text-center text-indigo-900">
                <p className="text-5xl md:text-7xl font-black mb-5">Experience</p>
                {/* <InfoBox expSource={experience} /> */}

                <VerticalTimeline>
                    {items.map(exp => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#fff', color: '#4C1D95', minHeight: '15rem'}}
                            contentArrowStyle={{ borderRight: '7px solid #fff' }}
                            date={exp.time}
                            iconStyle={{ background: '#4C1D95', color: '#fff' }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
                                <div className="my-auto">
                                    <img src={exp.image} alt={exp.title} className="my-auto" />
                                </div>
                                <div className="my-auto">
                                    <h3 className="vertical-timeline-element-title" className="font-bold text-2xl pt-2">{exp.title}</h3>
                                    <h4 className="vertical-timeline-element-subtitle" className="font-bold text-md">{exp.position}</h4>
                                    <p>
                                        {exp.list.map(desc => (
                                            <p className="sm:text-sm text-xs text-base px-2 mr-1 my-3">{desc}</p>
                                        ))}
                                    </p>
                                </div>
                            </div>
                            


                        </VerticalTimelineElement>

                    ))}
                    <VerticalTimelineElement
                        iconStyle={{ background: '#4C1D95', color: '#fff' }}
                    />
                </VerticalTimeline>

            </div>
            <div>

            </div>
        </div >
    )
}