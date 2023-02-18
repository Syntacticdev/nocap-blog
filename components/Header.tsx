import React from 'react'
import Link from "next/link"
type Props = {}

const Header = (props: Props) => {
    return (
        <header className='py-3'>
            <div className='text-center'>
                <h3 className='text-5xl font-bold mb-2'><span>.no</span><span className='text-red-600'>cap🧢</span></h3>
                <span className='text-md font-serif'>Just like pokenosing</span>
            </div>

            <div className='shadow-md my-4 py-2  shadow-slate-100 overflow-x-scroll md:overflow-x-hidden'>
                <nav className='flex sm:justify-center font-semibold list-none'>
                    <li className='mx-4'><Link href="/" className='font-bold'>Entertainment</Link></li>
                    <li className='mx-4'><Link href="/" className='font-bold'>Politics</Link></li>
                    <li className='mx-4'><Link href="/" className='font-bold'>Music</Link></li>
                    <li className='mx-4'><Link href="/" className='font-bold'>Education</Link></li>
                    <li className='mx-4'><Link href="/" className='font-bold'>Technology</Link></li>
                </nav>
            </div>
        </header>
    )
}

export default Header