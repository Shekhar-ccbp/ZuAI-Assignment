import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function PostDetail() {
  const {id} = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error))
  }, [id])

  if (!post) return <p>Loading...</p>

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  )
}

export default PostDetail
