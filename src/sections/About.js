import React, { useState, Component } from 'react';
import "tailwindcss/tailwind.css"

import { Transition } from '@headlessui/react'

export default function About() {
    return (
        <div className="h-screen flex items-center p-5 grid grid-row-2">
            <div className="text-center ">
                <p className="text-7xl font-black text-white">ABOUT</p>
                <p className="text-3xl text-gray-500">Click on a folder!</p>
            </div>

            <div className="text-center grid grid-col-2 grid-flow-col">

                <div className="p-5">
                    <img
                        src="https://u.cubeupload.com/cdalangin/schoolfol.png"
                        alt="school folder"
                        className="h-40"
                        type="button"
                        id="options-menu" aria-haspopup="true" aria-expanded="true" />
                    <img
                        src="https://u.cubeupload.com/cdalangin/activitiesfol.png"
                        alt="activity folder"
                        className="h-40" />
                </div>


                <div class="relative inline-block text-left">

                    <div class="origin-top-right absolute right-20 py-10 px-5 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <p className="text-xl px-4 py-2">CUNY Baruch College</p>
                            <p className="text-xl px-4 py-2">Class of 2023</p>
                            <p className="text-xl px-4 py-2">Computer Information Systems - Cybersecurity Major</p>
                            <p className="text-xl px-4 py-2">Graphic Art Minor</p>
                        </div>

                    </div>
                    <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <p className="text-xl px-4 py-2">HELLO</p>
                        </div>

                    </div>

                    {/* <div><button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
                            Options
                    {/* <!-- Heroicon name: chevron-down --> 
                        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        </button>   </div>*/}

                    {/* <!--
                        Dropdown panel, show/hide based on dropdown state.

                        Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                        Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                    --> */}


                </div>

            </div>

        </div >
    )
}