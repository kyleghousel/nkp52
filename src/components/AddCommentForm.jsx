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
        onNewComment(newComment)
        setFormData({ comment: '', user: '' })
      })
      .catch(error => alert(error))
  }

  return (
    <div className='container-sm' id='form-container'>
      <form className='row g-2 align-items-end justify-content-center' onSubmit={handleSubmit}>
        <div className="col-md-5">
          <label className="form-label">Comment</label>
          <input
            type='text'
            name='comment'
            className='form-control'
            placeholder='Type your comment...'
            value={formData.comment}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Name</label>
          <input
            type='text'
            name='user'
            className='form-control'
            placeholder='Type your name...'
            value={formData.user}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <button type='submit' className="btn btn-primary w-100 fs-7">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddCommentForm
