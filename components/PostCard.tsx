import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { PostType } from "../utils/data-configs"

const PostCard = ({ post }: { post: PostType }) => {
    return (
        <div className='grid min-h-[200px] sm:grid-cols-2 gap-2  px-2'>
            <Image className='h-full w-full' alt={`${post.thumbnail.fileName}`} src={`${post.thumbnail.url}`} width={200} height={50} priority />
            <div>
                <h3 className='font-bold text-2xl'>{post.title}</h3>
                <span className='mt-5 font-semibold text-sm'>{new Date(post.publishedAt).toDateString()}</span>

                <p className='my-4'>{post.excerpt}</p>

                <div className='mt-5'>
                    <div><Link href={`/${post.slug}`} className='rounded-md font-semibold text-gray-800 italic underline underline-offset-4 '>Read more</Link></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default PostCard