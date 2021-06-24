import React from 'react';
import "tailwindcss/tailwind.css"

export default function Buttons(props) {
    let url1 = props.url1
    let button1 = props.button1
    let url2 = props.url2
    let button2 = props.button2
    let url3 = props.url3
    let button3 = props.button3


    if (url1 != "URL" && url2 != "URL" && url3 != "URL") {
        return (
            <>
                <a href={url1}>
                    <button
                        className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                        {button1}
                    </button>
                </a>
                <a href={url2}>
                    <button
                        className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                        {button2}
                    </button>
                </a>
                <a href={url3}>
                    <button
                        className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                        {button3}
                    </button>
                </a>
            </>
        )
    } else if (url1 == "URL" && url2 != "URL" && url3 == "URL") {
        return (
            <>
                <a href={url2}>
                    <button
                        className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                        {button2}
                    </button>
                </a>
            </>
        )
    } else if (url1 != "URL" && url2 == "URL" && url3 == "URL") {
        return (
            <>
                <a href={url1}>
                    <button
                        className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                        {button1}
                    </button>
                </a>
            </>
        )
    } else if (url1 == "URL" && url2 == "URL" && url3 != "URL") {
        return (
            <>
                <a href={url3}>
                    <button
                        className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                        {button3}
                    </button>
                </a>
            </>
        )
    } else if (url1 != "URL" && url2 != "URL" && url3 == "URL") {
        return (
            <>
                <a href={url1}>
                    <button
                        className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                        {button1}
                    </button>
                </a>
                <a href={url2}>
                    <button
                        className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                        {button2}
                    </button>
                </a>
            </>
        )
    } else if (url1 == "URL" && url2 != "URL" && url3 != "URL") {
        return (
            <>
                <a href={url2}>
                    <button
                        className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                        {button2}
                    </button>
                </a>
                <a href={url3}>
                    <button
                        className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                        {button3}
                    </button>
                </a>
            </>
        )
    } else if (url1 != "URL" && url2 == "URL" && url3 != "URL") {
        return (
            <>
                <a href={url1}>
                    <button
                        className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                        {button1}
                    </button>
                </a>
                <a href={url3}>
                    <button
                        className="bg-purple-400 hover:bg-purple-300 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-600 rounded-xl focus:outline-none">
                        {button3}
                    </button>
                </a>
            </>
        )
    }

    return null



}