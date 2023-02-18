import React from 'react'
type Props = {}

const Footer = () => {
    return (
        <div className="mt-6">
            <div className="bg-gray-900 text-white p-4">
                <div className="container mx-auto flex flex-wrap items-center">
                    <div className="w-full">

                        <ul className="mt-4 flex items-center justify-center gap-3 ">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-gray-200"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-gray-200"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-gray-200"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="mt-2 font-semibold text-center border-t-[1px] border-white p-4"><span>Copyright by NOCAP. All Right Reserved. </span></div>
            </div >

        </div >
    )
}

export default Footer