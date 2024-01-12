import Link from 'next/link'
import style from './post.module.css'

export default function ViewPost({ id, title, body, userId }) {
  return (
    <Link href={`/post/${id}/${userId}`}>
      <aside className={style.post}>
        <h3>Title: {title}</h3>
        <p>{body}</p>
      </aside>
    </Link>
  )
}
