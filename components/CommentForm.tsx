import React, { useState } from 'react'
import { BooleanLiteral } from 'typescript'


type Props = { createComment: ({ message, name }: { message: string, name: string }) => void, posting: boolean }

const CommentForm = ({ createComment, posting }: Props) => {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const submitComment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await createComment({ message, name })
        setName("")
        setMessage("")
    }

    return (
        <form onSubmit={submitComment} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                </label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Leave a comment..."></textarea>
            </div>
            <div className="flex items-center justify-between">
                <button disabled={posting} className={`${posting ? "bg-gray-200" : "bg-gray-800"} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="submit">
                    {`${posting ? "Posting" : "Submit"}`}
                </button>
            </div>
        </form>
    )
}

export default CommentForm


