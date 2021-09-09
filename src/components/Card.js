import { React, useState } from 'react';
import Modal from 'react-modal'
import "tailwindcss/tailwind.css"
import Buttons from './Buttons.js'
import Achievements from './Achievements.js'
import Tech from './Tech.js'

Modal.setAppElement("#root")
export default function Card(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    let items = props.dataSource
    let prize;

    if (items.prize != "N/A") {
        prize = items.prize
    }
    const [modalInfo, setModalInfo] = useState(items[0]);

    const clickHandler = (items, index) => {
        setModalInfo(items[index])
        setModalIsOpen(true)
    }

    return (
        <div className="flex flex-row flex-wrap justify-center mt-5 ">

            {items.map((project, index) => (
                <div>

                    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg my-3 mr-5 bg-white">

                        <div className="bg-gray-700 flex justify-center items-center" onClick={() => clickHandler(items, index)}>
                            <img
                                src={project.image}
                                alt={project.name}
                                className="hover:opacity-20"
                            />
                        </div>
                    </div>
                </div>
            ))}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className="flex items-center justify-center"
                style={
                    {
                        overlay: {
                            maxHeight: '100vh',
                            maxWidth: '100vw',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        },
                        content: {
                            maxWidth: '75vh'
                        }
                    }
                }
            >
                <div class="text-center px-6 py-4 bg-white">

                    <div class="font-bold text-2xl mb-2">{modalInfo.name}</div>
                    <img
                        src={modalInfo.image}
                        alt={modalInfo.name}
                    />
                    <Achievements
                        prize={modalInfo.prize} />


                    <p class="text-grey-darker text-base">
                        {modalInfo.desc}

                    </p>
                    <div className="flex flex-row space-x-4 justify-center py-4">
                        <Tech
                            technologies={modalInfo.technologies}
                        />
                    </div>
                    <div className="flex flex-row space-x-4 justify-center py-4">

                        <Buttons
                            url1={modalInfo.url1}
                            button1={modalInfo.button1}
                            url2={modalInfo.url2}
                            button2={modalInfo.button2}
                            url3={modalInfo.url3}
                            button3={modalInfo.button3} />
                    </div>
                </div>
            </Modal>

        </div >

    )
}