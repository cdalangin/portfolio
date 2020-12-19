import React from 'react';
import { TabGroup } from '@statikly/funk'
import "tailwindcss/tailwind.css"
import Card from "../components/Card.js"
import fellowship from "../data/fellowship.json"
import hackathons from "../data/hackathons.json"
import misc from "../data/misc.json"


export default function Projects() {
    return (
        <div className="items-center py-2 px-2 grid grid-row-2 mb-10">

            <p className="text-7xl font-black text-white text-center">Projects</p>
            <div className="flex flex-col justify-center items-center mt-10">

                <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
                    <TabGroup.TabList className="border-b-4 border-purple-700">
                        <TabGroup.Tab
                            index={0}
                            className="h-12 px-12 transition-colors duration-150"
                            activeClassName="bg-purple-300 text-purple-700 rounded-t-xl focus:outline-none"
                            inactiveClassName="text-purple-700 focus:outline-none"
                        >
                            Internships
                    </TabGroup.Tab>
                        <TabGroup.Tab
                            index={1}
                            className="h-12 px-12 transition-colors duration-150"
                            activeClassName="bg-purple-300 text-purple-700 rounded-t-xl focus:outline-none"
                            inactiveClassName="text-purple-700 focus:outline-none"
                        >
                            Hackathons
                    </TabGroup.Tab>
                        <TabGroup.Tab
                            index={2}
                            className="h-12 px-12 transition-colors duration-150"
                            activeClassName="bg-purple-300 text-purple-700 rounded-t-xl focus:outline-none"
                            inactiveClassName="text-purple-700 focus:outline-none"
                        >
                            Miscellaneous
                    </TabGroup.Tab>
                    </TabGroup.TabList>
                    <TabGroup.TabPanel
                        index={0}
                        className="p-16 transition-all transform h-full"
                        activeClassName="opacity-100 duration-500 translate-x-0"
                        inactiveClassName="absolute opacity-0 -translate-x-2"
                    >
                        <div className="flex flex-row flex-wrap justify-center mt-5 ">
                            <Card dataSource={fellowship} />
                        </div>
                    </TabGroup.TabPanel>

                    <TabGroup.TabPanel
                        index={1}
                        className="p-16 transition-all transform h-full flex flex-col"
                        activeClassName="opacity-100 duration-500 translate-x-0"
                        inactiveClassName="absolute opacity-0 -translate-x-2"
                    >

                        <div className="flex flex-row flex-wrap justify-center mt-5 ">
                            <Card dataSource={hackathons} />
                        </div>

                    </TabGroup.TabPanel>
                    <TabGroup.TabPanel
                        index={2}
                        className="p-16 transition-all transform h-full"
                        activeClassName="opacity-100 duration-500 translate-x-0"
                        inactiveClassName="absolute opacity-0 -translate-x-2"
                    >

                        <div className="flex flex-row flex-wrap justify-center mt-5 ">
                            <Card dataSource={misc} />
                        </div>

                    </TabGroup.TabPanel>
                </TabGroup>
            </div>
        </div>
    )
}