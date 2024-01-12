export const getPostInfo = async (userId, postId) => {
  try {
    const [post, comments, user] = await Promise.all([
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        { cache: 'no-store' },
        {
          method: 'GET'
        }
      ),
      fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${userId}`,
        { cache: 'no-store' },
        {
          method: 'GET'
        }
      ),
      fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { cache: 'no-store' },
        {
          method: 'GET'
        }
      )
    ])
    return {
      post: await post.json(),
      comments: await comments.json(),
      user: await user.json()
    }
  } catch (error) {
    return false
  }
}
