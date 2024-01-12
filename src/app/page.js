import styles from './page.module.css'
import ViewPost from '@/components/post/Post'

const getPost = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET'
  })
  const post = await data.json()
  return post.slice(0, 5)
}

export default async function Home() {
  const post = await getPost()

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h2>Posts</h2>
      </div>

      {post?.map((p) => (
        <ViewPost key={p.id} title={p.title} body={p.body} id={p.id} userId={p.userId}/>
      ))}
    </main>
  )
}
