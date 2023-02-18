import React from 'react'
import Image from "next/image"
import Link from "next/link"
type Props = {}

const LatestPost = (props: Props) => {
    return (
        <div >
            <Image alt='' src="/pexels-photo-4974915.webp" width={200} height={200} className="bg-black" />
            <Link className='text-sm font-semibold' href="">ChatGPT to replace developers</Link>
        </div>
    )
}

export default LatestPost