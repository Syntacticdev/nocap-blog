import { gql, request, GraphQLClient } from "graphql-request"

export const getAllPosts = async () => {
  const hygraph = await new GraphQLClient(`${process.env.HYGRAPH_API}`)
  const query = gql`
  query MyQuery {
      posts {
        id
        title
        slug
        excerpt
        publishedAt
        thumbnail {
          fileName
          url
        }
        content {
          markdown
        }
        comments {
          id
          name
          message
          publishedAt
        }
        category {
          name
        }
      }
    }
        
  `
  const posts = await hygraph.request(query)
  return posts
}


export const postdetail = async (slug: string) => {
  const hygraph = await new GraphQLClient(`${process.env.HYGRAPH_API}`)

  const query = gql`
  query PostQuery($slug:String!){
    post(where: {slug: $slug}){
        id
  title
  slug
  publishedAt
  thumbnail {
    fileName
    url
  }
  content {
    raw
  }
  comments {
    id
    name
    message
    publishedAt
  }
  category {
    name
  }
    }
}
  `

  const { post } = await hygraph.request(query, { slug })
  return post
}



export const getComments = async (id: string) => {
  const hygraph = await new GraphQLClient(`${process.env.HYGRAPH_API}`)

  const query = gql`
  query GetComments($id:ID!){   
      comments(where: {post: {id: $id}}) {
        id
        name
        message
      } 
}
  `

  const comment = await hygraph.request(query, { id })
  return comment
}



export const createComment = async (id: string, name: string, message: string) => {
  const hygraph = await new GraphQLClient(`${process.env.HYGRAPH_CONTENT_API}`, {

    headers: { authorization: "Bearer " + process.env.HYGRAPH_TOKEN }
  })

  const query = gql`
    mutation CreateComment($id:ID!, $name:String!,$message:String!){
      createComment(
        data: {message: $message, name: $name, post: {connect: {id: $id}}}
      ) {
        id
        message
        name
      }
    }
  `

  const comment = await hygraph.request(query, { id, name, message })

  return comment

}



export const publishComment = async (id: string) => {
  const hygraph = await new GraphQLClient(`${process.env.HYGRAPH_CONTENT_API}`, {

    headers: { authorization: "Bearer " + process.env.HYGRAPH_TOKEN }
  })

  await hygraph.request(
    `mutation($id: ID!){
      publishComment(where:{id: $id}, to: PUBLISHED){
        id
      }
    }`, { id });

}



export const getRecentPosts = async () => {
  const hygraph = await new GraphQLClient(`${process.env.HYGRAPH_API}`)
  const query = gql`
  query MyQuery {
      posts(sorts: {createdAt: DESC}, first:10) {
        id
        title
        slug
        excerpt
        publishedAt
        thumbnail {
          fileName
          url
        }
      }
    }
        
  `
  const posts = await hygraph.request(query)
  return posts
}