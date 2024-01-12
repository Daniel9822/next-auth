import ViewPost from '@/components/post/Post'
import { getPostInfo } from '../data'
import style from '../post.module.css'

export default async function Page({ params }) {
  const { id } = params
  const [postId, userId] = id
  const info = await getPostInfo(userId, postId)

  const { user, comments, post } = info

  return (
    <section className={style.container}>
      <div className={style.author}>
        <span>Author: {user.name}</span>
        <span>{user.email}</span>
      </div>

      <ViewPost
        userId={post.userId}
        id={post.id}
        body={post.body}
        title={post.title}
        key={post.id}
      />

      <h4>Comments</h4>

      {comments?.map((c) => {
        return (
          <div key={c.id} className={style.comments}>
            <span>Name: {c.name}</span>
            <p>{c.body}</p>
          </div>
        )
      })}
    </section>
  )
}
