import React, { useState } from 'react'

const AddCommentForm = ({ onNewComment }) => {
  const [formData, setFormData] = useState({
    comment: '',
    user: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3001/comments/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(newComment => {
        onNewComment(newComment);
        setFormData({ comment: '', user: '' });
      })
      .catch(error => alert(error))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='comment' value={formData.comment} onChange={handleChange} />
      <input type='text' name='user' value={formData.user} onChange={handleChange} />
      <button type='submit'>Add Comment</button>
    </form>
  )
}

export default AddCommentForm
