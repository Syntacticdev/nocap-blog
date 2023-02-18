import Head from 'next/head'
import PostCard from '../components/PostCard'
import { PostType } from '../utils/data-configs'
import { getAllPosts } from "../utils/queries"


export default function Home({ posts }: { posts: PostType[] }) {
  return (
    <div>
      <Head>
        <title>Nocapblog</title>
        <meta name="description" content="Get Latest News on Nocap World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="grid sm:grid-cols-[65%,30%] gap-6">
          <div>
            <section className=' grid gap-10'>
              {posts.map((post) => (

                <PostCard key={post.id} post={post} />
              ))}
            </section>
          </div>

          <div>
            <div className='flex gap-3'>
              <button className='bg-red-600 font-bold text-white py-2 px-4'>POPULAR</button>
              <button className='text-slate-600 font-bold py-2 px-4'>RECENT</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const { posts } = await getAllPosts()

  return {
    props: {
      posts
    }
  }
}