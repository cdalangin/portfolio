import React, { useState, Component } from 'react';
import "tailwindcss/tailwind.css"
import { ImLinkedin, ImGithub, ImTwitter } from "react-icons/im";


export default function Footer() {
    return (
        <footer className="footer bg-purple-300 bg-opacity-60 relative pt-2 mt-12">
            <div className="container mx-auto px-5">

                <div className="sm:flex sm:mt-8 m-auto">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-6 flex justify-center">
                        <div className="flex flex-col mr-5">
                            <a href="https://www.linkedin.com/in/cfdalangin/">
                                <button
                                    className="p-6 text-center text-white transition border-2 border-transparent bg-purple-400 rounded-full ripple hover:bg-purple-300 hover:border-purple-300 focus:outline-none"
                                >
                                    <ImLinkedin
                                        className="h-8 w-8"
                                    />
                                </button>
                            </a>
                        </div>

                        <div className="flex flex-col mr-5">
                            <a href="https://github.com/cdalangin">
                                <button
                                    className=" p-6 text-center text-white transition border-2 border-transparent bg-purple-400 rounded-full ripple hover:bg-purple-300 hover:border-purple-300 focus:outline-none"
                                >
                                    <ImGithub
                                        className="h-8 w-8"
                                    />
                                </button>
                            </a>
                        </div>

                        <div className="flex flex-col">
                            <a href="https://twitter.com/italicflorenz">
                                <button
                                    className="p-6 text-center text-white transition border-2 border-transparent bg-purple-400 rounded-full ripple hover:bg-purple-300 hover:border-purple-300 focus:outline-none"
                                >
                                    <ImTwitter
                                        className="h-8 w-8"
                                    />
                                </button>
                            </a>
                        </div>

                    </div>

                </div>
                <p className="text-lg text-indigo-900 text-center font-medium p-10">
                    Made with 💜 Cirill Dalangin 2020
                </p>

            </div>


        </footer>

    )
}