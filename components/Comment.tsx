import React from 'react'
import Image from 'next/image'
import { FaUserCircle } from "react-icons/fa"
type Props = {}

const Comment = (comment: any) => {
    return (
        <div className='grid sm:w-4/5 mb-4 gap-1'>
            <div className='w-full '>
                {/* <FaUserCircle className='w-full h-2/4 text-gray-600' /> */}
            </div>
            <div>
                <h3 className='font-semibold text-2xl'>{comment.name}</h3>
                <p className='text-sm'>{comment.message}</p>
            </div>
        </div>
    )
}

export default Comment