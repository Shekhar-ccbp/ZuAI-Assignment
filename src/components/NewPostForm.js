import {useState} from 'react'

function NewPostForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const newPost = {
      title,
      content,
    }

    fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then(response => {
        if (response.ok) {
          console.log('Error')
        } else {
          console.error('Error creating post:', response.statusText)
        }
      })
      .catch(error => console.error('Error creating post:', error))
  }

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Title:</label>
          <input
            type="text"
            value={title}
            id="text"
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            value={content}
            id="content"
            onChange={e => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  )
}

export default NewPostForm
