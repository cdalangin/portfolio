import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import "tailwindcss/tailwind.css"
import Portrait from "../assets/portrait.jpg"
import { ImLinkedin, ImGithub, ImTwitter } from "react-icons/im";


export default function Start() {
    return (
        <div className="h-screen bg-purple-300 flex flex-col md:flex-row items-center justify-center p-4">
            <div className="text-center md:w-2/4">
                <p className="text-4xl font-black text-indigo-900">Hello! I'm Cirill Florenz</p>
                <p className="text-2xl text-indigo-800">An aspiring Frontend Developer who loves to crochet</p>
                <div className="sm:flex sm:mt-8 m-auto">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-6 flex justify-center">
                        <div className="flex flex-col mr-5">
                            <a href="https://www.linkedin.com/in/cfdalangin/">
                                <button
                                    className="p-3 text-center text-white transition border-2 border-transparent bg-purple-400 rounded-full ripple hover:bg-purple-300 hover:border-purple-300 focus:outline-none"
                                >
                                    <ImLinkedin
                                        className="h-4 w-4"
                                    />
                                </button>
                            </a>
                        </div>

                        <div className="flex flex-col mr-5">
                            <a href="https://github.com/cdalangin">
                                <button
                                    className=" p-3 text-center text-white transition border-2 border-transparent bg-purple-400 rounded-full ripple hover:bg-purple-300 hover:border-purple-300 focus:outline-none"
                                >
                                    <ImGithub
                                        className="h-4 w-4"
                                    />
                                </button>
                            </a>
                        </div>

                        <div className="flex flex-col">
                            <a href="https://twitter.com/italicflorenz">
                                <button
                                    className="p-3 text-center text-white transition border-2 border-transparent bg-purple-400 rounded-full ripple hover:bg-purple-300 hover:border-purple-300 focus:outline-none"
                                >
                                    <ImTwitter
                                        className="h-4 w-4"
                                    />
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="p-5 md:w-2/4">
                <img
                    src={Portrait}
                    alt="Picture of Cirill"
                    className="w-2/4 md:w-full m-auto" />
            </div>

        </div>
    )
}