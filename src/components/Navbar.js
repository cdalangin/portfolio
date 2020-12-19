import React, { useState, Component } from 'react';
import "tailwindcss/tailwind.css"
import { Link, Redirect, State } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="absolute bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-5">
                    <div className="flex justify-start">
                        <a href="#" className="text-base font-medium text-purple-50 hover:text-purple-600">
                            Home
                        </a>
                    </div>

                    {/* <div className="flex justify-start">
                        <a href="/about" className="text-base font-medium text-purple-50 hover:text-purple-600">
                            About
                        </a>
                    </div>

                    <div className="flex justify-start">
                        <a href="#" className="text-base font-medium text-purple-50 hover:text-purple-600">
                            Experiences
                        </a>
                    </div> */}

                    <div className="flex justify-start">
                        <a href="#" className="text-base font-medium text-purple-50 hover:text-purple-600">
                            Trophy Case
                        </a>
                    </div>

                    {/* <div className="flex justify-start">
                        <a href="#" className="text-base font-medium text-purple-50 hover:text-purple-600">
                            Contact Me
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}