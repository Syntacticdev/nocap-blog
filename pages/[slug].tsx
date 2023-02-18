import { useState, useEffect } from 'react'
import Image from 'next/image'
import Comment from '../components/Comment'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { postdetail, getComments } from "../utils/queries"
import CommentForm from '../components/CommentForm';
import { PostType, CommentType } from "../utils/data-configs"
import axios from "axios"

const PostDetail = ({ post, comments }: { post: PostType, comments: CommentType[] }) => {
    const [invalid, setInvalid] = useState(false)
    const [posting, setPosting] = useState(false)
    const [success, setSuccess] = useState(false)
    const [postcomments, setPostcomments] = useState<CommentType[]>(comments)

    useEffect(() => {
        setTimeout(() => {
            setInvalid(false)
            setSuccess(false)
        }, 3000)
    }, [success, invalid])

    const createComment = async ({ name, message }: { name: string, message: string }) => {
        if (!name || !message) return setInvalid(true)
        setPosting(true)
        const res = await axios.post("/api/comment", { id: post.id, name, message })

        if (res.status == 200) {
            setPostcomments([...postcomments, { id: String(Math.random() * 9), message, name }])
            setPosting(false)
            setSuccess(true)
        }
    }
    return (
        <div>
            <div className='mx-auto border-4 border-white flex gap-1  text-white py-2 px-4 mb-2'>
                <span className="tag bg-[rgba(0,0,0,.3)] px-4 py-1 " title='Travelling'>{post.category.name}</span>
            </div>
            <div className='text-center mx-auto border-4 border-white  py-2 px-4 '>
                <h1 className='sm:text-5xl text-2xl mt-2 font-bold text-center sm:w-2/4 italic mx-auto underline'>{post.title}</h1>
            </div>
            <div className='sm:w-3/5 mx-auto'>
                <div className="thumbnail_wrapper sm:h-[400px] sm:w-full my-4 mx-auto">
                    <Image className='w-full h-full object-fill' alt={`${post.thumbnail.fileName}`} src={`${post.thumbnail.url}`} priority height={100} width={500} />
                </div>
            </div>
            <div className='sm:w-4/5 px-3 sm:px-0 mx-auto sm:text-lg'>
                <RichText content={post.content.raw} />
            </div>

            <div className="comments mt-5 w-[80%] mx-auto">
                <h1 className='font-semibold mb-5 underline underline-offset-8'>COMMENTS</h1>
                {postcomments.map((comment) => (
                    <Comment key={comment.id} {...comment} />
                ))}
            </div>
            {success && <p className='text-green-300  p-3'>Comment Successful</p>}
            {invalid && <p className='text-red-300  px-8'>All Input is required *</p>}
            <CommentForm createComment={createComment} posting={posting} />

        </div>
    )
}

export default PostDetail


export const getServerSideProps = async ({ params: { slug } }: { params: { slug: string } }) => {
    const post = await postdetail(slug)
    const { comments } = await getComments(post.id)
    return {
        props: { post, comments }
    }
}