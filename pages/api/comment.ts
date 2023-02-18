// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { graphql } from 'graphql'
import { GraphQLClient, gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createComment, publishComment } from "../../utils/queries"

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { id, name, message } = req.body
    const comment = await createComment(id, name, message)

    await publishComment(comment.createComment.id)
    res.status(200).json(comment)
}
